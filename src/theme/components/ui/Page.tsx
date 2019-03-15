import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps } from 'docz'
import { useWindowSize } from 'react-use'
import styled from 'styled-components'

import { Container } from './Container'
import { Sidebar, Topbar } from '@components/shared'
import { breakpoints } from '@styles/responsive'

interface WrapperProps {
  padding: boolean
  noflex: boolean
}

const padding = (p: WrapperProps) => (p.padding ? 40 : 0)
const noflex = (p: WrapperProps) => (p.noflex ? 'block' : 'flex')

const Wrapper = styled.div<WrapperProps>`
  flex: 1;

  ${Container} {
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

const Document = styled.div`
  width: 100%;
  padding: 40px 0;
`

export const Page: SFC<PageProps> = ({ children, doc }) => {
  const { menu, sidebar, fullpage, noflex } = doc
  const { width } = useWindowSize()
  const showSidebar = Boolean(menu || sidebar)
  const isAtLeastDesktop = width > breakpoints.mobile

  return (
    <React.Fragment>
      <Topbar />
      <Wrapper padding={!showSidebar} noflex={noflex}>
        {fullpage ? (
          <Fragment>
            {isAtLeastDesktop ? (
              <Fragment>{children}</Fragment>
            ) : (
              <Fragment>
                <Sidebar menu={menu || doc.name} />
                {children}
              </Fragment>
            )}
          </Fragment>
        ) : (
          <Container>
            {showSidebar ? (
              <Fragment>
                <Sidebar menu={menu || doc.name} />
                <Document>{children}</Document>
              </Fragment>
            ) : (
              <Fragment>
                {isAtLeastDesktop ? (
                  <Fragment>{children}</Fragment>
                ) : (
                  <Fragment>
                    <Sidebar menu={menu || doc.name} />
                    {children}
                  </Fragment>
                )}
              </Fragment>
            )}
          </Container>
        )}
      </Wrapper>
    </React.Fragment>
  )
}
