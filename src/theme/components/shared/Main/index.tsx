import * as React from 'react'
import { SFC, useState, createContext } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const mainContext = createContext({
  showing: false,
})

export const Main: SFC = ({ children }) => {
  const [showing, setShowing] = useState(false)
  return (
    <mainContext.Provider value={{ showing, setShowing }}>
      <Wrapper>{children}</Wrapper>
    </mainContext.Provider>
  )
}
