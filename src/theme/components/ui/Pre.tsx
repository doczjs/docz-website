import '@styles/prism-theme'

import 'prismjs'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-markdown.min'
import 'prismjs/components/prism-typescript.min'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import prism from 'prismjs'
import styled from 'styled-components'
import cx from 'classnames'

const PreStyled = styled.pre`
  ${p => p.theme.styles.pre};
`

interface PreProps {
  children: any
  className?: string
}

export const Pre: React.SFC<PreProps> = ({ children, className }) => {
  const preRef = useRef<any>(null)
  const hasChildren = children && children.props
  const childrenProps = hasChildren && children.props.props
  const childrenClassName = childrenProps && childrenProps.className

  useEffect(() => {
    preRef && preRef.current && prism.highlightElement(preRef.current)
  })

  return (
    <PreStyled
      ref={preRef}
      className={cx('react-prism', className, childrenClassName)}
    >
      {hasChildren ? children.props.children : children}
    </PreStyled>
  )
}
