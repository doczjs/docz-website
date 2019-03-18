import * as React from 'react'
import { SFC } from 'react'
import styled from 'styled-components'

import { Box as BaseBox } from '@components/ui'

const Box = styled(BaseBox)`
  padding: 20px;
`

const Title = styled.h3`
  margin: 0 0 5px;
  font-size: 25px;
`

const Description = styled.p`
  margin: 0 0 10px;
  font-size: 16px;
`

const Link = styled.a`
  margin: 0;

  &,
  &:visited,
  &:hover {
    color: ${p => p.theme.colors.oceanDark};
  }

  &:hover {
    text-decoration: underline;
  }
`

interface CardProps {
  name: string
  description: string
  link: string
  className?: string
}

export const Card: SFC<CardProps> = ({
  className,
  name,
  description,
  link,
}) => (
  <Box className={className}>
    <Title>
      <Link href={link} target="_blank">
        {name}
      </Link>
    </Title>
    <Description>{description}</Description>
  </Box>
)
