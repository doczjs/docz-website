import './ads'

import * as React from 'react'
import { Component, Fragment, SFC } from 'react'
import { Docs, Entry, DocsRenderProps, Link as BaseLink } from 'docz'
import styled from 'react-emotion'
import { adopt } from 'react-adopt'
import { Media } from 'react-breakpoints'
import { Toggle } from 'react-powerplug'

import { Hamburguer } from '@components/shared/Sidebar/Hamburguer'

interface WrapperProps {
  opened: boolean
  desktop: boolean
  theme?: any
}

const toggle = (p: WrapperProps) => (p.opened && !p.desktop ? '-100%' : '0')

const position = (p: WrapperProps) =>
  p.theme.mq({
    position: ['absolute', 'absolute', 'relative', 'relative'],
  })

const SidebarWrapper = styled('div')`
  width: 280px;
  min-width: 280px;
  height: 100%;
  padding: 50px 40px 50px 0;
  margin-right: 60px;
  border-right: 1px solid ${p => p.theme.colors.grayLight};

  background: #fff;

  transition: transform 0.2s, background 0.3s;
  transform: translateX(${toggle});
  z-index: 100;

  left: 0;
  ${position};

  ${p =>
    p.theme.mq({
      top: ['60px', '60px', '0', '0'],
      marginRight: ['0px', '0px', '60px', '60px'],
      padding: ['25px 30px', '25px 30px', '50px 40px 50px 0', '50px 40px 50px 0'],
      height: ['100%', '100%', 'auto', 'auto'],
      minHeight: ['auto', 'auto', '100%', '100%'],
      overflow: ['hidden auto', 'hidden auto', 'inherit', 'inherit']
    })};
`

const Wrapper = styled('div')`
  position: -webkit-sticky;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${p =>
    p.theme.mq({
      position: ['relative', 'relative', 'sticky', 'sticky'],
      top: ['0px', '0px', '50px', '50px']
    })};
`

const Link = styled(BaseLink)`
  font-size: 18px;
  padding: 5px 0;

  &,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }

  &.active,
  &:hover {
    color: ${p => p.theme.colors.ocean};
  }
`

const SmallLink = styled('a')`
  font-size: 16px;
  padding: 0 0 5px 10px;

  &,
  &.active,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }
`

const Submenu = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`

const MenuContainer = styled('div')`
  display: block;
  position: relative;
  padding-bottom: 26px;
  margin-bottom: 26px;

  &:before {
    content: '';
    position: absolute;
    background-color: ${p => p.theme.colors.grayLight};
    height: 1px;
    width: 280px;
    bottom: 0;
    left: -29px;
    right: 0;
  }
`

const MenuLink = styled(Link)`
  font-family: Zilla Slab;
  display: block;
  font-weight: bold;
  padding: 3px 0;
`

const IconLink = styled('a')`
  font-family: Zilla Slab;
  display: block;
  font-weight: bold;
  padding: 3px 0;

  &,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }

  &.active,
  &:hover {
    color: ${p => p.theme.colors.ocean};
  }
`

interface OpenProps {
  opened: boolean
}

const ToggleBackground = styled('div')`
  content: '';
  display: ${(p: OpenProps) => (p.opened ? 'none' : 'block')};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  z-index: 98;
`

interface MenuProps {
  doc: Entry
  active: string
  handleSidebarToggle: () => void
}

const Menu: SFC<MenuProps> = ({ doc, active, handleSidebarToggle }) => (
  <Fragment>
    <Link to={doc.route} onClick={handleSidebarToggle}>{doc.name}</Link>
    {active === doc.route && (
      <Submenu>
        {doc.headings.map(
          heading =>
            heading.depth > 1 &&
            heading.depth < 3 && (
              <SmallLink key={heading.slug} href={`#${heading.slug}`} onClick={handleSidebarToggle}>
                {heading.value}
              </SmallLink>
            )
        )}
      </Submenu>
    )}
  </Fragment>
)

interface SidebarProps {
  parent: string
  active: string
}

interface Media {
  breakpoints: any
  currentBreakpoint: string
}

interface Toggle {
  on: boolean
  toggle: () => void
}

interface MapperProps {
  docs: DocsRenderProps
  media: Media
  toggle: Toggle
}

type EnhancedProps = DocsRenderProps &
  Toggle & {
    media: Media
  }

const mapper = {
  docs: <Docs />,
  media: <Media />,
  toggle: <Toggle initial={true} />,
}

const mapProps = ({ docs, media, toggle }: MapperProps) => ({
  ...docs,
  ...toggle,
  media,
})

const Composed = adopt<EnhancedProps>(mapper, mapProps)

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')

export class Sidebar extends Component<SidebarProps> {
  public addCarbonAds = () => {
    const wrapper = document.getElementById('ads')
    const script = document.createElement('script')

    script.setAttribute('async', '')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      '//cdn.carbonads.com/carbon.js?serve=CK7D6237&placement=wwwdoczsite'
    )
    script.setAttribute('id', '_carbonads_js')

    if (wrapper) {
      wrapper.appendChild(script)
    }
  }

  public componentDidMount(): void {
    this.addCarbonAds()
  }

  public render(): React.ReactNode {
    const { active, parent } = this.props

    return (
      <Composed>
        {({ docs: allDocs, media, toggle, on }: EnhancedProps) => {
          const docs = allDocs.filter(doc => doc.parent === parent)
          const topBarMenu = allDocs.filter(doc => !doc.parent)
          const isDesktop = media.breakpoints[media.currentBreakpoint] > media.breakpoints.mobile ? true : false

          const handleSidebarToggle = (ev: React.SyntheticEvent<any>) => {
            if (isDesktop) return
            toggle && toggle()
          }

          return (
            <React.Fragment>
              <Hamburguer opened={!on} onClick={handleSidebarToggle} />
              <SidebarWrapper opened={on} desktop={isDesktop}>
                <Wrapper>
                  {!isDesktop ? (
                    <React.Fragment>
                      <MenuContainer>
                        {topBarMenu.map(doc => (
                          <MenuLink
                            key={doc.id}
                            to={doc.route}
                            isActive={isActive(doc.route)}
                            onClick={handleSidebarToggle}
                          >
                            {doc.name}
                          </MenuLink>
                        ))}
                        <IconLink
                          key="GitHub"
                          href="https://github.com/pedronauck/docz"
                          target="_blank"
                          onClick={handleSidebarToggle}
                        >
                          GitHub
                        </IconLink>
                      </MenuContainer>
                    </React.Fragment>
                  ) : ('')}
                  {docs.map(doc => (
                    <Menu key={doc.id} doc={doc} active={active} handleSidebarToggle={handleSidebarToggle} />
                  ))}
                  <div id="ads" />
                </Wrapper>
              </SidebarWrapper>
              <ToggleBackground opened={on} onClick={handleSidebarToggle} />
            </React.Fragment>
          )
        }}
      </Composed>
    )
  }
}
