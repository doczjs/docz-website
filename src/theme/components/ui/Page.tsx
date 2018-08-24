import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps } from 'docz'
import { adopt } from 'react-adopt'
import { Media } from 'react-breakpoints'
import styled from 'react-emotion'

import { Container } from './Container'
import { Sidebar } from '@components/shared'

interface WrapperProps {
  padding: boolean
  noflex: boolean
}

const padding = (p: WrapperProps) => (p.padding ? 40 : 0)
const noflex = (p: WrapperProps) => (p.noflex ? 'block' : 'flex')

const Wrapper = styled<WrapperProps, 'div'>('div')`
  flex: 1;
  overflow-y: auto;

  ${Container.toString()} {
    display: ${noflex};
    min-height: 100%;

    ${p =>
      p.theme.mq({
        paddingLeft: ['14px', '20px', '20px', '20px'],
        paddingRight: ['14px', '20px', '20px', '20px'],
      })};

    padding-top: ${padding}px;
    padding-bottom: ${padding}px;
  }
`

const Document = styled('div')`
  width: 100%;
  padding: 40px 0;
`

interface Media {
  breakpoints: any
  currentBreakpoint: string
}

interface MapperProps {
  media: Media
}

const mapper = {
  media: <Media />
}

const mapProps = ({ media }: MapperProps) => ({
  media
})

const Composed = adopt<MapperProps>(mapper, mapProps)

export const Page: SFC<PageProps> = ({ children, doc, ...props }) => (
  <Composed>
    {({ media }: MapperProps) => {
      const { parent, sidebar, fullpage, noflex } = doc
      const showSidebar = Boolean(parent || sidebar)
      const isAtLeastDesktop = media.breakpoints[media.currentBreakpoint] > media.breakpoints.mobile ? true : false

      return (
        <Wrapper padding={!showSidebar} noflex={noflex}>
          {fullpage ? (
            <Fragment>
              {isAtLeastDesktop ? (
                <Fragment>{children}</Fragment>
              ) : (
                <Fragment>
                  <Sidebar parent={parent || doc.name} active={props.match.url} />
                  {children}
                </Fragment>
              )}
            </Fragment>
          ) : (
            <Container>
              {showSidebar ? (
                <Fragment>
                  <Sidebar parent={parent || doc.name} active={props.match.url} />
                  <Document>{children}</Document>
                </Fragment>
              ) : (
                <Fragment>
                  {isAtLeastDesktop ? (
                    <Fragment>{children}</Fragment>
                  ) : (
                    <Fragment>
                      <Sidebar parent={parent || doc.name} active={props.match.url} />
                      {children}
                    </Fragment>
                  )}
                </Fragment>
              )}
            </Container>
          )}
        </Wrapper>
      )
    }}
  </Composed>
)
