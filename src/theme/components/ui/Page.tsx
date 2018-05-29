import * as React from 'react'
import { PageProps } from 'docz'
import { SFC } from 'react'
import styled from 'react-emotion'

import { Container } from './Container'

const Wrapper = styled('div')`
  flex: 1;
  height: 100%;
  overflow-y: auto;
`

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => {
  return (
    <Wrapper>
      {doc.settings.fullpage ? children : <Container>{children}</Container>}
    </Wrapper>
  )
}
