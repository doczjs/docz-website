import * as React from 'react'
import styled from 'react-emotion'

import { Card as BaseCard } from './Card'

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
`

const Card = styled(BaseCard)`
  width: 33%;
`

export const Cards = () => (
  <Wrapper>
    <Card
      image="https://cdn-std.dprcdn.net/files/acc_649651/TkJQcV"
      name="docz-theme-default"
      description="Default theme created by docz"
      link="https://github.com/doczjs/docz/tree/master/packages/docz-theme-default"
    />
  </Wrapper>
)
