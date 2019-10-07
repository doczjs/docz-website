import * as React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'docz'

import { btnStyle } from '@components/ui/Button'
import { Container, Pre as BasePre } from '@components/ui'
import pattern from '@images/dark-pattern2.png'

const Wrapper = styled.div`
  background: url(${pattern});
  color: ${p => p.theme.colors.grayLight};
  text-align: center;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    ${p =>
      p.theme.mq({
        padding: ['50px 10px', '50px 20px'],
      })};
  }
`

const Title = styled.h2`
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 52px;
  font-weight: 600;
  color: white;

  ${p =>
    p.theme.mq({
      lineHeight: ['1', '1', '1.62', '1.62'],
      fontSize: ['38px', '38px', '48px', '52px'],
    })};
`

const Text = styled.p`
  font-size: 20px;
  color: white;
`

const Pre = styled(BasePre)`
  width: 100%;
  max-width: 650px;
  margin: 10px 0 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${p =>
    p.theme.mq({
      minWidth: ['100%', '100%', '650px', '650px'],
    })};
`

const Link = styled(BaseLink)`
  ${btnStyle};
`

const mdxExample = `---
name: Button
route: /
---

import { Playground, Props } from 'docz'
import { Button } from './'

# Button

<Props of={Button} />

## Basic usage

<Playground>
  <Button>Click me</Button>
  <Button kind="secondary">Click me</Button>
</Playground>
`

export const HowTo = () => (
  <Wrapper>
    <Container>
      <Title>How to</Title>
      <Text>Install Docz as a dependency</Text>
      <Pre className="language-bash">
        $ yarn add docz@next react react-dom --dev
      </Pre>
      <Text>
        Create an <code>.mdx</code> file anywhere in your project
      </Text>
      <Pre className="language-markdown">{mdxExample}</Pre>
      <Text>That's it, your docs are ready to fly!</Text>
      <Pre className="language-bash">$ yarn docz dev</Pre>
      <Link to="/docs/getting-started">More info</Link>
    </Container>
  </Wrapper>
)
