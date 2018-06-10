import * as React from 'react'
import { SFC } from 'react'
import { css, cx } from 'react-emotion'

import { ButtonStyled, ButtonProps } from './Button'

const LinkStyled = ButtonStyled.withComponent('a')

const customClass = css`
  display: block;
  text-align: center;
`

type ButtonLinkProps = ButtonProps & React.AnchorHTMLAttributes<any>

export const ButtonLink: SFC<ButtonLinkProps> = ({ className, ...props }) => (
  <LinkStyled className={cx(customClass, className)} {...props} />
)
