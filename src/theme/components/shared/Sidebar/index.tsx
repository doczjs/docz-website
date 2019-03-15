import * as React from 'react'
import { useCallback, useState, useEffect } from 'react'
import { Fragment, SFC } from 'react'
import { Entry, Link as BaseLink, useDocs, useMenus } from 'docz'
import { useWindowSize } from 'react-use'
import styled from 'styled-components'

import { Hamburguer } from '@components/shared/Sidebar/Hamburguer'
import { ADSStyleSheet, addCarbonAds } from './ads'
import { breakpoints } from '@styles/responsive'

interface WrapperProps {
  opened: boolean
  desktop: boolean
  theme?: any
}

const toggle = (p: WrapperProps) => {
  return !p.opened && !p.desktop ? '-100%' : '0'
}

const position = (p: WrapperProps) =>
  p.theme.mq({
    position: ['absolute', 'absolute', 'relative', 'relative'],
  })

const SidebarWrapper = styled.div`
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
      padding: [
        '25px 30px',
        '25px 30px',
        '50px 40px 50px 0',
        '50px 40px 50px 0',
      ],
      height: ['100%', '100%', 'auto', 'auto'],
      minHeight: ['auto', 'auto', '100%', '100%'],
      overflow: ['hidden auto', 'hidden auto', 'inherit', 'inherit'],
    })};
`

const Wrapper = styled.div`
  position: -webkit-sticky;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${p =>
    p.theme.mq({
      position: ['relative', 'relative', 'sticky', 'sticky'],
      top: ['0px', '0px', '50px', '50px'],
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

const SmallLink = styled(BaseLink)`
  font-size: 16px;
  padding: 0 0 5px 10px;

  &,
  &.active,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }
`

const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`

const MenuContainer = styled.div`
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

const IconLink = styled.a`
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

const ToggleBackground = styled.div`
  content: '';
  display: ${(p: OpenProps) => (!p.opened ? 'none' : 'block')};
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
  onClick: React.MouseEventHandler
}

const Menu: SFC<MenuProps> = ({ doc, active, onClick }) => (
  <Fragment>
    <Link to={doc.route} onClick={onClick}>
      {doc.name}
    </Link>
    {active === doc.route && (
      <Submenu>
        {doc.headings.map(
          heading =>
            heading.depth > 1 &&
            heading.depth < 3 && (
              <SmallLink
                key={heading.slug}
                to={`${doc.route}#${heading.slug}`}
                onClick={onClick}
              >
                {heading.value}
              </SmallLink>
            )
        )}
      </Submenu>
    )}
  </Fragment>
)

interface SidebarProps {
  menu: string
}

export const Sidebar: SFC<SidebarProps> = ({ menu: current }) => {
  const docs = useDocs()
  const { width } = useWindowSize()
  const [opened, setOpened] = useState(false)

  const menus = useMenus()
  const found = menus && menus.find(e => e.name === current)
  const filtered = found && found.menu
  const topBarMenu = filtered ? filtered.filter(menu => !menu.menu) : []
  const isDesktop = width > breakpoints.mobile

  const toggle = useCallback(() => {
    setOpened(s => !s)
  }, [])

  const handleSidebarToggle = (ev: React.SyntheticEvent<any>) => {
    if (isDesktop) return
    toggle && toggle()
  }

  useEffect(() => {
    addCarbonAds()
  }, [])

  return (
    <React.Fragment>
      <ADSStyleSheet />
      <Hamburguer opened={opened} onClick={handleSidebarToggle} />
      <SidebarWrapper opened={opened} desktop={isDesktop}>
        <Wrapper>
          {!isDesktop ? (
            <React.Fragment>
              <MenuContainer>
                {topBarMenu.map(doc => (
                  <MenuLink
                    key={doc.id}
                    to={doc.route}
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
          ) : (
            ''
          )}
          {filtered &&
            filtered.map(menu => {
              const doc = docs && docs.find(i => i.name === menu.name)
              if (!doc) return null
              return (
                <Menu
                  key={doc.id}
                  doc={doc}
                  active={current}
                  onClick={handleSidebarToggle}
                />
              )
            })}
          <div id="ads" />
        </Wrapper>
      </SidebarWrapper>
      <ToggleBackground opened={opened} onClick={handleSidebarToggle} />
    </React.Fragment>
  )
}
