import React, { SFC } from 'react'
import styled from 'react-emotion'

import * as colors from '@styles/colors'

const scales = {
  small: `
    padding: 5px 10px;
    font-size: 14px;
  `,
  normal: `
    padding: 10px 20px;
    font-size: 16px;
  `,
  big: `
    padding: 20px 30px;
    font-size: 18px;
  `,
}

const kind = (outline: boolean) => (bg: string, color: string) => {
  const boxShadowColor = outline ? bg : 'transparent'
  const backgroundColor = outline ? 'transparent' : bg

  return `
    background: ${backgroundColor};
    box-shadow: inset 0 0 0 1px ${boxShadowColor};
    color: ${outline ? bg : color};
    transition: all .3s;

    &:hover {
      box-shadow: inset 0 0 0 1000px ${boxShadowColor};
      color: ${color};
    }
  `
}

type Kind = 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray'
type Kinds = Record<Kind, string>

const kinds = (outline: boolean): Kinds => {
  const get = kind(outline)

  return {
    primary: get(colors.purple, 'white'),
    secondary: get(colors.ocean, 'white'),
    cancel: get('#FF4949', 'white'),
    dark: get(colors.main, 'white'),
    gray: get(colors.gray, 'white'),
  }
}

export interface ButtonProps {
  scale?: 'small' | 'normal' | 'big'
  kind?: 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray'
  outline?: boolean
  onClick?: React.EventHandler<any>
}

const getScale = ({ scale = 'normal' }: ButtonProps) => scales[scale]
const getKind = ({ kind = 'primary', outline = false }: ButtonProps) =>
  kinds(outline)[kind]

const ButtonStyled = styled<ButtonProps, 'button'>('button')`
  ${getKind};
  ${getScale};
  cursor: pointer;
  margin: 3px 5px;
  border: none;
  border-radius: 3px;
`

export const Button: SFC<ButtonProps> = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
)
