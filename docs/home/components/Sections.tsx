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
`

const Title = styled('h2')`
  font-size: 48px;
  font-family: 'Zilla Slab';
  margin: 0 0 40px 0;
`

const Image = styled('img')`
  width: 1024px;
`

const Text = styled('p')`
  width: 600px;
  margin: 40px 0;
  text-align: center;
`

export const Sections = withRouter(({ history }) => (
  <Wrapper>
    <Title>Built-in Components</Title>
    <Image src={image} alt="Built-in components" />
    <Text>
      Docz built-ins components help you to document your things. Using the
      power of components and some AST parsing algorithms to source data, we can
      render your components on the fly, create tables with contents, custom
      search and so much more. The sky is limit here!
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
