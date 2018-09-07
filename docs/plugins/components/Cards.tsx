import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

import { Card as BaseCard } from './Card'
import { mq } from '@styles/responsive'

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const Card = styled(BaseCard)`
  ${mq({
    width: ['100%', 'calc(50% - 20px)', 'calc(50% - 20px)', 'calc(50% - 20px)'],
    margin: ['10px 0', '10px', '10px', '10px'],
  })};
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      name="docz-plugin-css"
      description="Plugin to parse css files inside your documents"
      link="https://github.com/pedronauckdocz-plugin-css"
    />
    <Card
      name="docz-plugin-netlify"
      description="Deploy your documentation to Netlify"
      link="https://github.com/nicholasess/docz-plugin-netlify"
    />
    <Card
      name="docz-plugin-react-native"
      description="Allow you to use docz with React Native"
      link="https://github.com/pedronauck/docz-plugin-react-native"
    />
    <Card
      name="docz-plugin-svgr"
      description="Allow you to parse svg using svgr"
      link="https://github.com/pedronauck/docz-plugin-svgr"
    />
  </Wrapper>
)
