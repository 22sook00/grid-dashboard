import styled from '@emotion/styled'
import { size } from 'src/styles/values/size'
import { color } from 'src/styles/values/color'

// Table 있는 페이지 내 Top
export const PageTop = styled.div`
  padding: 20px 30px 50px 30px;
`

// Table 있는 페이지 내 Body
export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ pageTopHeight }) => `calc(100% - ${pageTopHeight || 0}px - ${size.height.snb}px)`};
  padding: 0px 30px 100px 30px;
`

export const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 1272px;
  padding: 20px;
  overflow-y: auto;
`

export const TostAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgba(185, 223, 251, 0.5);

  path {
    fill: ${color.system.success.blue[300]};
  }
`
