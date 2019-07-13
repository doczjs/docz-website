import * as React from 'react'
import { SFC } from 'react'
import styled from 'styled-components'

import { Card as BaseCard } from './Card'

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 20px;

  ${p =>
    p.theme.mq({
      gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
    })}
`

const Card = styled(BaseCard)``

export const Cards: SFC = () => (
  <Wrapper>
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
      name="docz-plugin-svg-sprite-loader"
      description="Docz plugin for SVG sprite loader"
      link="https://github.com/trustedhousesitters/docz-plugin-svg-sprite-loader"
    />
    <Card
      name="docz-plugin-snapshots"
      description="A plugin for Docz that creates jest snapshots for all documented component usages"
      link="https://github.com/JosephConradBlack/docz-plugin-snapshots"
    />
  </Wrapper>
)
