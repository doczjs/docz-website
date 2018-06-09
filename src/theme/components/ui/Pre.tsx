import '@styles/prism-theme'

import 'prismjs'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-markdown.min'
import 'prismjs/components/prism-typescript.min'

import React, { PureComponent } from 'react'
import prism from 'prismjs'
import styled, { cx } from 'react-emotion'

const PreStyled = styled('pre')`
  ${p => p.theme.styles.pre};
`

interface PreProps {
  children: any
  className?: string
}

export class Pre extends PureComponent<PreProps> {
  private el: any

  public render(): JSX.Element {
    const { children } = this.props
    const hasChildren = children && children.props
    const childrenProps = hasChildren && children.props.props
    const childrenClassName = childrenProps && childrenProps.className

    const className = cx('react-prism', this.props.className, childrenClassName)

    return (
      <PreStyled innerRef={ref => (this.el = ref)} className={className}>
        {hasChildren ? children.props.children : children}
      </PreStyled>
    )
  }

  public componentDidMount(): void {
    this.highlightCode()
  }

  public componentDidUpdate(): void {
    this.highlightCode()
  }

  private highlightCode(): void {
    prism.highlightElement(this.el)
  }
}
