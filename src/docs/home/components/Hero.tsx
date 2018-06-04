import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { withRouter } from 'react-router'

import { Button, Container, Logo } from '@components/ui'
import pattern from '@images/pattern.png'

const Wrapper = styled('div')`
  width: 100%;
  background: url(${pattern});
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};
  padding: 50px 0;

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
`

const Subtitle = styled('h2')`
  font-weight: 200;
`

const VideoWrapper = styled('div')`
  width: 720px;
  margin: 50px 0;
`

const Video = styled('div')`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 56.25%;

  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  & > div > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

const Buttons = styled('div')`
  display: flex;
`

export const Hero = withRouter(({ history }) => (
  <Wrapper>
    <Helmet>
      <script
        src="https://fast.wistia.com/embed/medias/8d1cq6wec3.jsonp"
        async
      />
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
    </Helmet>
    <Container>
      <Logo height={100} />
      <Subtitle>It has never been so easy to document your things!</Subtitle>
      <VideoWrapper>
        <Video className="wistia_responsive_padding">
          <div className="wistia_responsive_wrapper">
            <div className="wistia_embed wistia_async_8d1cq6wec3 videoFoam=true">
              &nbsp;
            </div>
          </div>
        </Video>
      </VideoWrapper>
      <Buttons>
        <Button
          scale="big"
          onClick={() => history.push('/introduction/get-started')}
        >
          Get started
        </Button>
        <Button scale="big" onClick={() => history.push('/documentation')}>
          Documentation
        </Button>
      </Buttons>
    </Container>
  </Wrapper>
))
