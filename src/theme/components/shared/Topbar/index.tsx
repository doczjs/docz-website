import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Docs, Link } from 'docz'
import { Github } from 'react-feather'

import { Container } from '@components/ui'
import logo from '@images/logo.svg'

const Wrapper = styled('div')`
  height: 60px;
  width: 100%;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`

const Logo = styled('img')`
  height: 30px;
`

const Menu = styled('div')`
  display: flex;
`

const linkStyle = (p: any) => css`
  color: ${p.theme.colors.main};
  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;

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

export const Topbar = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
      <Docs>
        {({ docs }) => {
          const docsWithoutMenu = docs.filter(doc => !doc.menu)

          return (
            <Menu>
              {docsWithoutMenu.map(doc => (
                <MenuLink key={doc.id} to={doc.route}>
                  {doc.name}
                </MenuLink>
              ))}
              <IconLink href="#">
                <Github width={30} />
              </IconLink>
            </Menu>
          )
        }}
      </Docs>
    </Container>
  </Wrapper>
)
