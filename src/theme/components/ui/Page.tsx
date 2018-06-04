import * as React from 'react'
import { SFC } from 'react'
import { PageProps, Docs, Link as BaseLink } from 'docz'
import styled from 'react-emotion'

import { Container } from './Container'

const SidebarWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-right: 50px;
  font-size: 18px;
  border-right: 3px solid ${p => p.theme.colors.grayLight};
`

const Link = styled(BaseLink)`
  padding: 5px 0;

  &,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }

  &.active,
  &:hover {
    color: ${p => p.theme.colors.purple};
  }
`

interface SidebarProps {
  parent: string
}

const Sidebar: SFC<SidebarProps> = ({ parent }) => {
  return (
    <Docs>
      {({ docs: allDocs }) => {
        const docs = allDocs.filter(doc => doc.settings.parent === parent)
        return (
          <SidebarWrapper>
            {docs.map(doc => (
              <Link key={doc.id} to={doc.route}>
                {doc.name}
              </Link>
            ))}
          </SidebarWrapper>
        )
      }}
    </Docs>
  )
}

const Wrapper = styled('div')`
  flex: 1;
  height: 100%;
  overflow-y: auto;

  ${Container.toString()} {
    display: flex;
    padding: 50px 0;
  }
`

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc.settings
  const showSidebar = Boolean(parent || sidebar)

  return (
    <Wrapper>
      {fullpage ? (
        children
      ) : (
        <Container>
          {showSidebar && <Sidebar parent={parent || doc.name} />}
          {children}
        </Container>
      )}
    </Wrapper>
  )
}
