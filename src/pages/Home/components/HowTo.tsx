import * as React from 'react'
import styled from 'react-emotion'

import { Container } from '@components/ui'
import pattern from '@images/dark-pattern2.png'

const Wrapper = styled('div')`
  padding: 100px 0;
  background: url(${pattern});
  color: ${p => p.theme.colors.grayLight};
  text-align: center;
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
  margin: 30px 0;
`

const Image = styled('img')`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
`

export const HowTo = () => (
  <Wrapper>
    <Container>
      <Title>How to</Title>
      <Text>install on your project:</Text>
      <Image src="https://i.imgur.com/apN5678.png" width={600} />
      <Text>
        Create some <code>.mdx</code> file anywhere:
      </Text>
      <Image src="https://i.imgur.com/DOsIi1j.png" width={600} />
      <Text>That's it, your document is ready now!</Text>
      <Image src="https://i.imgur.com/6X3L9zv.png" width={600} />
    </Container>
  </Wrapper>
)
