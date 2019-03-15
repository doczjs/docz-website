import * as React from 'react'
import { SFC } from 'react'
import styled from 'styled-components'

import { Box, ButtonLink } from '@components/ui'

const Info = styled.div`
  padding: 20px;
`

const Image = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};
`

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
`

const Description = styled.p`
  margin: 0 0 10px;
`

const Link = styled(ButtonLink)`
  margin: 0;
`

interface CardProps {
  name: string
  image: string
  description: string
  link: string
  className?: string
}

export const Card: SFC<CardProps> = ({
  className,
  name,
  image,
  description,
  link,
}) => (
  <Box className={className}>
    <Image src={image} />
    <Info>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Link scale="small" href={link} target="_blank" kind="secondary">
        View Source
      </Link>
    </Info>
  </Box>
)
