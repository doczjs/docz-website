import styled from 'react-emotion'

export const H2 = styled('h2')`
  ${p => p.theme.styles.h2};

  code {
    padding: 10px 15px;
    font-size: 0.8em;
    color: ${p => p.theme.colors.grayDark};
  }
`
