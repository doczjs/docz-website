import * as React from 'react'
import styled, { css } from 'styled-components'
import { useDocs, Link, useMenus } from 'docz'
import Github from 'react-feather/dist/icons/github'

import { Container, Logo } from '@components/ui'

const Wrapper = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  z-index: 99;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 14px', '0 20px', '0 20px', '0 20px'],
      })};
  }
`

const LogoLink = styled(Link)`
  height: 30px;
`

const Menu = styled.div`
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

const IconLink = styled.a`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;

  svg {
    stroke: ${p => p.theme.colors.main};
  }
`

const MENUS = [
  'Home',
  'Introduction',
  'Documentation',
  'Plugins',
  'Themes',
  'Blog',
]

export const Topbar = () => {
  const docs = useDocs()
  const menuList = useMenus({
    filter: e => {
      return MENUS.indexOf(e.name) > -1
    },
  })

  if (!menuList) return null
  return (
    <Wrapper>
      <Container>
        <LogoLink to="/">
          <Logo height={30} />
        </LogoLink>
        <Menu>
          {menuList.map(menu => {
            const doc = docs && docs.find(item => item.name === menu.name)
            if (!doc) return null
            return (
              doc.route && (
                <MenuLink key={menu.id} to={doc.route}>
                  {menu.name}
                </MenuLink>
              )
            )
          })}
          <IconLink
            as="a"
            href="https://medium.com/doczoficial"
            target="_blank"
          >
            Blog
          </IconLink>
          <IconLink
            as="a"
            href="https://github.com/pedronauck/docz"
            target="_blank"
          >
            <Github width={30} />
          </IconLink>
        </Menu>
      </Container>
    </Wrapper>
  )
}
