import { color } from 'src/styles/values/color'
import styled from '@emotion/styled'
import { FlexSC } from '../global'

export const BasicGridContainer = styled(FlexSC.FlexColumn)`
  border: 2px dashed ${color.border.default};
  border-radius: 4px;
  padding: 8px;
  position: relative;
  h1 {
    font-size: 50px;
  }
`
export const GridDeleteContainer = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
  border: 1px solid;
  z-index: 100;
`
