import * as React from 'react'
import styled from 'react-emotion'
import { withRouter } from 'react-router'

import { Button, Container, Pre as BasePre } from '@components/ui'
import pattern from '@images/dark-pattern2.png'

const Wrapper = styled('div')`
  padding: 100px 0;
  background: url(${pattern});
  color: ${p => p.theme.colors.grayLight};
  text-align: center;

  ${Container.toString()} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

const Title = styled('h2')`
  margin: 0 0 40px;
  font-family: 'Zilla Slab';
  font-size: 52px;
  font-weight: 600;
  color: white;
`

const Text = styled('p')`
  font-size: 20px;
  color: white;
`

const Pre = styled(BasePre)`
  margin: 10px 0 20px 0;
  min-width: 650px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const mdxExample = `---
name: Hello world
---

import { MyComponent } from './MyComponent'

# Hello world

I'm a markdown document that can have components!

<MyComponent />
`

export const HowTo = withRouter(({ history }) => (
  <Wrapper>
    <Container>
      <Title>How to</Title>
      <Text>Install Docz as dependency</Text>
      <Pre className="language-bash">$ yarn add docz --dev</Pre>
      <Text>
        Create some <code>.mdx</code> anywhere on your project
      </Text>
      <Pre className="language-markdown">{mdxExample}</Pre>
      <Text>That's it, your docs is ready to fly!</Text>
      <Pre className="language-bash">$ yarn docz dev</Pre>
      <Button
        scale="big"
        kind="secondary"
        onClick={() => history.push('/introduction/getting-started')}
      >
        More details
      </Button>
    </Container>
  </Wrapper>
))
