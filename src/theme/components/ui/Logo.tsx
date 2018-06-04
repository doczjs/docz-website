import * as React from 'react'
import { SFC } from 'react'

import logo from '@images/logo.svg'

export interface LogoProps {
  width?: number
  height?: number
}

export const Logo: SFC<LogoProps> = props => <img {...props} src={logo} />
