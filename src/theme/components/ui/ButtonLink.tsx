import * as React from 'react'
import { SFC } from 'react'
import styled from 'styled-components'

import { ButtonStyled, ButtonProps } from './Button'

const Link = styled(ButtonStyled)`
  display: block;
  text-align: center;
`

type ButtonLinkProps = ButtonProps & React.AnchorHTMLAttributes<any>

export const ButtonLink: SFC<ButtonLinkProps> = ({ className, ...props }) => (
  <Link as="a" className={className} {...props} />
)
