import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps, Docs, Link as BaseLink } from 'docz'
import styled from 'react-emotion'

import { Container } from './Container'

const SidebarWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 270px;
  min-width: 270px;
  min-height: 100%;
  padding: 50px 40px 50px 0;
  margin-right: 60px;
  border-right: 1px solid ${p => p.theme.colors.grayLight};
`

const Link = styled(BaseLink)`
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

interface WrapperProps {
  padding: boolean
}

const Wrapper = styled<WrapperProps, 'div'>('div')`
  flex: 1;
  overflow-y: auto;

  ${Container.toString()} {
    display: flex;
    min-height: 100%;
    padding: ${p => (p.padding ? 50 : 0)}px 0;
  }
`

const Document = styled('div')`
  width: 100%;
  padding: 40px 0;
`

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc.settings
  const showSidebar = Boolean(parent || sidebar)

  return (
    <Wrapper padding={!showSidebar}>
      {fullpage ? (
        children
      ) : (
        <Container>
          {showSidebar ? (
            <Fragment>
              <Sidebar parent={parent || doc.name} />
              <Document>{children}</Document>
            </Fragment>
          ) : (
            children
          )}
        </Container>
      )}
    </Wrapper>
  )
}
