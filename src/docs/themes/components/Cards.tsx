import * as React from 'react'
import { SFC } from 'react'
import styled from 'styled-components'

import { Card as BaseCard } from './Card'
import { mq } from '@styles/responsive'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Card = styled(BaseCard)`
  ${mq({
    width: ['100%', 'calc(50% - 20px)', 'calc(33% - 20px)', 'calc(33% - 20px)'],
    margin: ['10px 0', '10px', '10px', '10px'],
  })};
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      image="https://cdn-std.dprcdn.net/files/acc_649651/TkJQcV"
      name="gatsby-theme-docz"
      description="Default theme created by docz"
      link="https://github.com/pedronauck/docz/tree/master/core/gatsby-theme-docz"
    />
    <Card
      image="https://github.com/zicodeng/docz-theme-ztopia/blob/master/public/images/demo.gif?raw=true"
      name="docz-theme-ztopia"
      description="Ztopia theme created by zicodeng"
      link="https://github.com/zicodeng/docz-theme-ztopia"
    />
  </Wrapper>
)
