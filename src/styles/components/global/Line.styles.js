import styled from '@emotion/styled'
import { color } from 'src/styles/values/color'

export const DashedLine = styled.div`
  border-bottom: 1px dashed ${color.grayscale.gray[200]};
`
export const SolidLine = styled.div`
  border-bottom: 1px solid ${color.border.default};
`
