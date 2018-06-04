import * as React from 'react'
import styled from 'react-emotion'

import { Button, Container } from '@components/ui'
import logo from '@images/logo.svg'
import pattern from '@images/pattern.png'

const Wrapper = styled('div')`
  width: 100%;
  height: calc(100vh - 60px);
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

const Logo = styled('img')`
  height: 100px;
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

export const Hero = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
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
        <Button scale="big">Get started</Button>
        <Button scale="big">Documentation</Button>
      </Buttons>
    </Container>
  </Wrapper>
)
