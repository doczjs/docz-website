import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

interface OpenProps {
  opened: boolean
}

const IconFirst = (p: OpenProps) => (!p.opened ? '0px' : '10px')
const IconMiddle = (p: OpenProps) => (!p.opened ? '1' : '0')
const IconLast = (p: OpenProps) => (!p.opened ? '0px' : '-6px')
const IconRotate = (p: OpenProps) => (!p.opened ? '0deg' : '45deg')

const Icon = styled('div')`
  position: relative;
  width: 23px;
  height: 32px;
  margin: auto;
  background: transparent;
  transform: translateX(${(p: OpenProps) => (p.opened ? '-2px' : '-1px')})
    translateY(${(p: OpenProps) => (p.opened ? '0' : '2px')})
    scale(${(p: OpenProps) => (p.opened ? 0.8 : 1)});
`

const IconLine = styled('span')`
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  background: ${p => p.theme.colors.text};
  transition: transform 0.3s, opacity 0.3s;

  &:nth-child(1) {
    top: -2px;
    transform: translateY(${IconFirst}) rotate(${IconRotate});
  }

  &:nth-child(2) {
    top: 6px;
    opacity: ${IconMiddle};
  }

  &:nth-child(3) {
    top: 14px;
    transform: translateY(${IconLast}) rotate(-${IconRotate});
  }
`

const ToggleButton = styled('button')`
  position: absolute;
  top: 14px;
  cursor: pointer;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 6px;
  width: 42px;
  height: 30px;
  transition: transform 0.3s;
  outline: none;
  border: none;
  background: transparent;

  ${p =>
    p.theme.mq({
      display: ['block', 'block', 'none', 'none'],
      right: ['2px', '10px', '10px', '10px']
    })};
`

interface HamburguerProps extends OpenProps {
  onClick: (ev: React.SyntheticEvent<any>) => void
}

export const Hamburguer: SFC<HamburguerProps> = ({ opened, onClick }) => (
  <ToggleButton opened={opened} onClick={onClick}>
    <Icon opened={opened}>
      <IconLine opened={opened} />
      <IconLine opened={opened} />
      <IconLine opened={opened} />
    </Icon>
  </ToggleButton>
)
