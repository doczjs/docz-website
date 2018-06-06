import styled from 'react-emotion'

export const Code = styled('code')`
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 3px;
  border: 1px solid ${p => p.theme.colors.gray};
  background: #eff2f7;
  font-size: 16px;
  color: ${p => p.theme.colors.orange};
`
