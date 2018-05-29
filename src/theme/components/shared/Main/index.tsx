import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Main: SFC = ({ children }) => <Wrapper>{children}</Wrapper>
