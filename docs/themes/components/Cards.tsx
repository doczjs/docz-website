import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

import { Card as BaseCard } from './Card'

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Card = styled(BaseCard)`
  margin: 10px;
  width: calc(33% - 20px);
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      image="https://cdn-std.dprcdn.net/files/acc_649651/TkJQcV"
      name="docz-theme-default"
      description="Default theme created by docz"
      link="https://github.com/pedronauck/docz/tree/master/packages/docz-theme-default"
    />
  </Wrapper>
)
