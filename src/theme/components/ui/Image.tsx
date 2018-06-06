import * as React from 'react'
import { SFC } from 'react'
import { adopt } from 'react-adopt'
import { Toggle, Hover } from 'react-powerplug'
import { ZoomIn } from 'react-feather'
import Lightbox from 'react-images'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  position: relative;
  margin: 30px 0;
  border: 1px solid ${p => p.theme.colors.grayLight};
`

const ImageStyled = styled('img')`
  display: block;
  width: 100%;
  padding: 5px;
`

const ImageHover = styled('div')`
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

const mapper = {
  toggle: <Toggle initial={false} />,
  hover: <Hover />,
}

const Composed = adopt(mapper, ({ toggle, hover }) => ({
  ...toggle,
  ...hover,
}))

export const Image: SFC<ImageProps> = props => (
  <Composed>
    {({ on, toggle, isHovered, bind }: any) => (
      <Wrapper {...bind}>
        {isHovered && (
          <ImageHover>
            <ZoomIcon size={80} onClick={toggle} />
          </ImageHover>
        )}
        <ImageStyled {...props} />
        {on && (
          <Lightbox
            images={[{ src: props.src }]}
            isOpen={on}
            onClose={toggle}
          />
        )}
      </Wrapper>
    )}
  </Composed>
)
