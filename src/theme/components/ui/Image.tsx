import * as React from 'react'
import { SFC, useState } from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin: 30px 0;
  border: 1px solid ${p => p.theme.colors.grayLight};
`

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  padding: 5px;
`

type ImageProps = React.ImgHTMLAttributes<any>

export const Image: SFC<ImageProps> = props => {
  const [opened, setOpened] = useState(false)
  const toggle = () => setOpened(s => !s)

  return (
    <Wrapper>
      <ImageStyled {...props} />
      {opened && (
        <Lightbox
          images={[{ src: props.src }]}
          isOpen={opened}
          onClose={toggle}
        />
      )}
    </Wrapper>
  )
}
