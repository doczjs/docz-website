import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

import { Card } from './Card'

const Wrapper = styled('div')`
  display: flex;
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      name="docz-plugin-babel6"
      description="Use this plugin to use older babel version"
      link="https://github.com/pedronauck/docz/tree/master/packages/docz-plugin-babel6"
    />
    <Card
      name="docz-plugin-css"
      description="Plugin to parse css files inside your documents"
      link="https://github.com/pedronauck/docz/tree/master/packages/docz-plugin-css"
    />
  </Wrapper>
)
