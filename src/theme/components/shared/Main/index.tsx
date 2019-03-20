import * as React from 'react'
import { SFC, useEffect, useState, createContext } from 'react'
import { useWindowSize } from 'react-use'
import { breakpoints } from '@styles/responsive'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const mainContext = createContext<any>(null)

export const Main: SFC = ({ children }) => {
  const [showing, setShowing] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')
      const method = showing ? 'add' : 'remove'
      body && body.classList[method]('with-overlay')
    }
  }, [showing])

  useEffect(() => {
    if (width > breakpoints.tablet) {
      const body = document.querySelector('body')
      body && body.classList.remove('with-overlay')
      setShowing(false)
    }
  }, [width])

  return (
    <mainContext.Provider value={{ showing, setShowing }}>
      <Wrapper>{children}</Wrapper>
    </mainContext.Provider>
  )
}
