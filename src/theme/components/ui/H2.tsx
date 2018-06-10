import styled from 'react-emotion'

export const H2 = styled('h2')`
  position: relative;
  ${p => p.theme.styles.h2};

  code {
    padding: 10px 15px;
    font-size: 0.8em;
    color: ${p => p.theme.colors.grayDark};
  }

  .icon-link {
    position: absolute;
    display: inline-block;
    top: 0;
    left: -25px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .icon-link {
    opacity: 1;
  }
`
