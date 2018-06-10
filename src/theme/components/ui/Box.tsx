import styled from 'react-emotion'

export const Box = styled('div')`
  display: flex;
  flex-direction: column;
  background: white;
  border: 2px solid ${p => p.theme.colors.gray};
  border-radius: 5px;
`
