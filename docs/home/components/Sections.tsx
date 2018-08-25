import * as React from 'react'
import styled from 'react-emotion'
import { withRouter } from 'react-router'

import { Button } from '@components/ui'
import image from '@images/builtin-components.png'

const Wrapper = styled('div')`
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${p => p.theme.colors.grayLight};
  border-top: 1px solid ${p => p.theme.colors.gray};
  ${p =>
    p.theme.mq({
      padding: ['50px 10px', '50px 20px', '50px 20px', '100px 0'],
    })};
`

const Title = styled('h2')`
  font-family: 'Zilla Slab';
  margin: 0 0 40px 0;
  text-align: center;

  ${p =>
    p.theme.mq({
      lineHeight: ['1', '1', '1.62', '1.62'],
      fontSize: ['38px', '38px', '48px', '48px']
    })};
`

const Image = styled('img')`
  max-width: 100%;
  width: 1024px;
`

const Text = styled('p')`
  width: 600px;
  max-width: 100%;
  margin: 40px 0;
  text-align: center;
`

export const Sections = withRouter(({ history }) => (
  <Wrapper>
    <Title>Built-in Components</Title>
    <Image src={image} alt="Built-in components" />
    <Text>
      Using Docz's built-in components makes it easy to document your things. Using the
      power of components and AST parsing algorithms to source data, Docz
      renders your components on the fly, generates fully-formatted property tables, provides custom
      search, and so much more. The sky is the limit!
    </Text>
    <Button
      scale="big"
      kind="secondary"
      onClick={() => history.push('/introduction/documenting-your-things')}
    >
      More information
    </Button>
  </Wrapper>
))
