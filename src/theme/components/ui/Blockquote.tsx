import styled from 'react-emotion'

export const Blockquote = styled('blockquote')`
  padding: 10px 30px 10px 30px;
  margin: 30px 0;
  border-radius: 3px;
  border-left: 4px solid ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.grayExtraLight};
  color: ${p => p.theme.colors.grayDark};
`
