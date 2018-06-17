import * as React from 'react'
import { SFC } from 'react'
import styled from 'react-emotion'

import { Box, ButtonLink } from '@components/ui'

const Info = styled('div')`
  padding: 20px;
`

const Title = styled('h3')`
  margin: 0 0 5px;
  font-size: 25px;
`

const Description = styled('p')`
  margin: 0 0 10px;
`

const Link = styled(ButtonLink)`
  margin: 0;
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
    <Info>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Link scale="small" href={link} target="_blank" kind="secondary">
        View Source
      </Link>
    </Info>
  </Box>
)
