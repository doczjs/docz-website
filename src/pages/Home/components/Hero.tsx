import * as React from 'react'
import styled from 'react-emotion'

import { Container } from '@components/ui'
import logo from '@images/logo.svg'
import pattern from '@images/pattern.png'

const Wrapper = styled('div')`
  width: 100%;
  height: 500px;
  background: url(${pattern});
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};
  padding: 50px 0;

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
`

const Logo = styled('img')`
  height: 150px;
`

const Subtitle = styled('h2')`
  font-weight: 200;
`

export const Hero = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
      <Subtitle>It has never been so easy to document your things!</Subtitle>
    </Container>
  </Wrapper>
)
