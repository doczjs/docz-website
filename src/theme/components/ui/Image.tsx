import * as React from 'react'
import { SFC, useState, useRef } from 'react'
import { useHoverDirty } from 'react-use'
import ZoomIn from 'react-feather/dist/icons/zoom-in'
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

const ImageHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

const ZoomIcon = styled(ZoomIn)`
  stroke: white;

  &:hover {
    cursor: pointer;
  }
`

type ImageProps = React.ImgHTMLAttributes<any>

export const Image: SFC<ImageProps> = props => {
  const [opened, setOpened] = useState(false)
  const wrapperRef = useRef(null)
  const hovered = useHoverDirty(wrapperRef)
  const toggle = () => setOpened(s => !s)

  return (
    <Wrapper ref={wrapperRef}>
      {hovered && (
        <ImageHover>
          <ZoomIcon size={80} onClick={toggle} />
        </ImageHover>
      )}
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
