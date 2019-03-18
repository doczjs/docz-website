import * as React from 'react'
import { SFC } from 'react'

import logo from '@images/logo.svg'
import symbol from '@images/symbol.svg'

export interface LogoProps extends React.ImgHTMLAttributes<any> {
  width?: number
  height?: number
  small?: boolean
}

export const Logo: SFC<LogoProps> = ({ small, ...props }) => (
  <img {...props} src={small ? symbol : logo} />
)
