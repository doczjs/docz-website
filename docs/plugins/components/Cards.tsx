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
      name="docz-plugin-css"
      description="Plugin to parse css files inside your documents"
      link="https://github.com/pedronauck/docz/tree/master/packages/docz-plugin-css"
    />
    <Card
      name="docz-plugin-babel6"
      description="Use this plugin to use older babel version [DEPRECATED]"
      link="https://github.com/pedronauck/docz/tree/master/packages/docz-plugin-babel6"
    />
    <Card
      name="docz-plugin-netlify"
      description="Deploy your documentation to Netlify"
      link="https://github.com/nicholasess/docz-plugin-netlify"
    />
    <Card
      name="docz-plugin-react-native"
      description="Allow you to use docz with React Native"
      link="https://github.com/pedronauck/docz/blob/master/packages/docz-plugin-react-native"
    />
    <Card
      name="docz-plugin-svgr"
      description="Allow you to parse svg using svgr"
      link="https://github.com/pedronauck/docz/blob/master/packages/docz-plugin-svgr"
    />
  </Wrapper>
)
