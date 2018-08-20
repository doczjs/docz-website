import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps } from 'docz'
import styled from 'react-emotion'

import { Container } from './Container'
import { Sidebar } from '@components/shared'

interface WrapperProps {
  padding: boolean
}

const padding = (p: WrapperProps) => (p.padding ? 50 : 0)

const Wrapper = styled<WrapperProps, 'div'>('div')`
  flex: 1;
  overflow-y: auto;

  ${Container.toString()} {
    display: flex;
    min-height: 100%;

    ${p =>
      p.theme.mq({
        paddingLeft: ['10px', '20px', '20px', '20px'],
        paddingRight: ['10px', '20px', '20px', '20px'],
      })};

    padding-top: ${padding}px;
    padding-bottom: ${padding}px;
  }
`

const Document = styled('div')`
  width: 100%;
  padding: 40px 0;
`

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  const { parent, sidebar, fullpage } = doc
  const showSidebar = Boolean(parent || sidebar)

  return (
    <Wrapper padding={!showSidebar}>
      {fullpage ? (
        children
      ) : (
        <Container>
          {showSidebar ? (
            <Fragment>
              <Sidebar parent={parent || doc.name} active={props.match.url} />
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
