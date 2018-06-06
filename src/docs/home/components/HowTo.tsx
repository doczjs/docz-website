import * as React from 'react'
import styled from 'react-emotion'
import { withRouter } from 'react-router'

import { Button, Container } from '@components/ui'
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

const Image = styled('img')`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin: 15px 0 30px;
`

export const HowTo = withRouter(({ history }) => (
  <Wrapper>
    <Container>
      <Title>How to</Title>
      <Text>Install on your project</Text>
      <Image src="https://i.imgur.com/apN5678.png" width={600} />
      <Text>
        Create some <code>.mdx</code> file anywhere
      </Text>
      <Image src="https://i.imgur.com/DOsIi1j.png" width={600} />
      <Text>That's it, your document is ready now!</Text>
      <Image src="https://i.imgur.com/6X3L9zv.png" width={600} />
      <Button
        scale="big"
        kind="secondary"
        onClick={() => history.push('/documentation')}
      >
        More details
      </Button>
    </Container>
  </Wrapper>
))
