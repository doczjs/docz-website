import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Docs, Link, DocsRenderProps } from 'docz'
import { Github } from 'react-feather'
import { adopt } from 'react-adopt'
import { Media } from 'react-breakpoints'
import { Toggle } from 'react-powerplug'

import { Container, Logo } from '@components/ui'
import { Hamburguer } from '@components/shared/Topbar/Hamburguer'

interface WrapperProps {
  opened: boolean
  desktop: boolean
}

const toggle = (p: WrapperProps) => (p.opened && !p.desktop ? '-90%' : '0')

const Wrapper = styled('div')`
  height: 60px;
  width: 100%;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 10px', '0 20px', '0 20px', '0 20px'],
      })};
  }
`

const LogoLink = styled(Link)`
  height: 30px;
`

const Menu = styled('div')`
  ${p =>
    p.theme.mq({
      display: ['none', 'none', 'flex', 'flex'],
    })};
`

const linkStyle = (p: any) => css`
  color: ${p.theme.colors.main};
  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${p.theme.colors.main};
    opacity: 1;
  }
`

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`

const IconLink = styled('a')`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;

  svg {
    stroke: ${p => p.theme.colors.main};
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
  z-index: 99;
`

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

export const Topbar = () => (
  <Wrapper>
    <Container>
      <LogoLink to="/">
        <Logo height={30} />
      </LogoLink>
      <Composed>
        {({ docs: allDocs, media, toggle, on }: EnhancedProps) => {
          const docs = allDocs.filter(doc => !doc.parent)
          const isDesktop = media.currentBreakpoint === 'desktop' ? true : false

          const handleSidebarToggle = (ev: React.SyntheticEvent<any>) => {
            if (isDesktop) return
            toggle && toggle()
          }

          return (
            <React.Fragment>
              <Hamburguer opened={!on} onClick={handleSidebarToggle} />
              <Menu>
                {docs.map(doc => (
                  <MenuLink
                    key={doc.id}
                    to={doc.route}
                    isActive={isActive(doc.route)}
                  >
                    {doc.name}
                  </MenuLink>
                ))}
                <IconLink
                  href="https://github.com/pedronauck/docz"
                  target="_blank"
                >
                  <Github width={30} />
                </IconLink>
              </Menu>
              <ToggleBackground opened={on} onClick={handleSidebarToggle} />
            </React.Fragment>
          )
        }}
      </Composed>
    </Container>
  </Wrapper>
)
