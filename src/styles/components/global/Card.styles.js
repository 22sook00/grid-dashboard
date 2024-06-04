import { color } from 'src/styles/values/color'
import { size, spacing } from 'src/styles/values/size'
import styled from '@emotion/styled'

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || '40px'}; // header 와 body 간격

  padding: 20px;
  /* padding: 20px 40px 20px 40px; */
  /* margin-bottom: 20px; */
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 15px 0px;

  /* 레이아웃 변경되면 수정하기 */
  ${({ direction }) =>
    direction === 'col' &&
    `
      flex-direction: column;
      align-items: flex-start;
      gap: ${({ gap }) => gap || '20px'};
    `}

  > h2 {
    width: ${({ titleWidth }) => titleWidth || '200px'};
    font-size: 16px;
  }
`

export const CardBody = styled.div`
  flex-grow: 1;
`

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CardFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;

  h3 {
    flex-shrink: 0;
    width: ${size.width.label.setting}px;
    font-size: 14px;
    font-weight: 500;
    word-break: keep-all;
    line-height: 1.5;

    &.required::after {
      content: '*';
      margin-left: 4px;
      color: ${color.system.error.red[300]};
      font-size: 14px;
    }
  }
`

export const CardFormRowBody = styled.div`
  /* flex-grow: 1; */
`
