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
    width: ['100%', 'calc(50% - 20px)', 'calc(50% - 20px)', 'calc(50% - 20px)'],
    margin: ['10px 0', '10px', '10px', '10px'],
  })};
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      name="docz-plugin-css"
      description="Plugin to parse css files inside your documents"
      link="https://github.com/pedronauck/docz-plugin-css"
    />
    <Card
      name="docz-plugin-storybook"
      description="Docz plugin that makes migrating from Storybook in a breeze"
      link="https://github.com/hydrateio/docz-plugin-storybook"
    />
    <Card
      name="docz-plugin-netlify"
      description="Deploy your documentation to Netlify"
      link="https://github.com/nicholasess/docz-plugin-netlify"
    />
    <Card
      name="docz-plugin-postcss"
      description="Docz plugin for PostCSS"
      link="https://github.com/andreasonny83/docz-plugin-postcss"
    />
    <Card
      name="docz-plugin-svg-sprite-loader"
      description="Docz plugin for SVG sprite loader"
      link="https://github.com/trustedhousesitters/docz-plugin-svg-sprite-loader"
    />
    <Card
      name="docz-plugin-snapshots"
      description="A plugin for docz that creates jest snapshots for all documented component usages"
      link="https://github.com/JosephConradBlack/docz-plugin-snapshots"
    />
  </Wrapper>
)
