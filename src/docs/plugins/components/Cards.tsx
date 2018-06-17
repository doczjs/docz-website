import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

import { Card as BaseCard } from './Card'

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
`

const Card = styled(BaseCard)`
  width: 33%;
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      name="docz-plugin-babel6"
      description="Use this plugin if you want to use some older babel version"
      link="https://github.com/pedronauck/docz/tree/master/packages/docz-plugin-babel6"
    />
  </Wrapper>
)
