import { color } from 'src/styles/values/color'
import styled from '@emotion/styled'

export const BasicGridContainer = styled.div`
  border: 2px dashed ${color.border.default};
  border-radius: 4px;
  padding: 8px;
`
export const GridDeleteContainer = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
`
