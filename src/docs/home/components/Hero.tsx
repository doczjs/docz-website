import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import GitHubButton from 'react-github-button'
import { navigate } from '@reach/router'

import { Button, Container, Logo } from '@components/ui'
import pattern from '@images/pattern.png'
import image from '@images/builtin-components.png'

const Wrapper = styled.div`
  width: 100%;
  background: url(${pattern});
  background-position: center;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  ${p =>
    p.theme.mq({
      padding: ['30px 0', '50px 0'],
    })};
`

const Subtitle = styled.h2`
  font-weight: 200;
  text-align: center;
`

const Image = styled.img`
  margin: 60px 0;
  max-width: 100%;
  width: 1024px;
`

const Buttons = styled.div`
  display: flex;
`

export const Hero = () => {
  return (
    <Wrapper>
      <Helmet>
        <script
          src="https://fast.wistia.com/embed/medias/cl69p284xk.jsonp"
          async
        />
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      </Helmet>
      <Container>
        <Logo height={80} style={{ maxWidth: '100%' }} />
        <Subtitle>It's never been easier to document your things!</Subtitle>
        <GitHubButton
          type="stargazers"
          size="large"
          namespace="pedronauck"
          repo="docz"
        />
        <Image src={image} alt="Built-in components" />
        <Buttons>
          <Button scale="big" onClick={() => navigate('/docs/getting-started')}>
            Getting started
          </Button>
          <Button scale="big" onClick={() => navigate('/docs/introduction')}>
            Documentation
          </Button>
        </Buttons>
      </Container>
    </Wrapper>
  )
}
