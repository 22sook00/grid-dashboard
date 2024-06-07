import { color } from 'src/styles/values/color'
import styled from '@emotion/styled'
import { FlexSC } from '../global'
import { keyframes } from '@emotion/react'

const growAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`
const slideUpAnimation = keyframes`
 0% {
    transform: translateY(30%);
    opacity: 0;
  }
  60% {
    transform: translateY(-10%);
    opacity: 1;
  }
  80% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0);
  }
`
export const WidgetIconContainer = styled(FlexSC.FlexColumn)`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  border: 3px dashed ${color.grayscale.gray[300]};
  cursor: pointer;
  transition: all 0.3s;
  background-color: #eee171;
  &:hover {
    background-color: #eee899;
  }
`
export const WidgetBoxContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 80%;
  right: 10px;
  top: 20px;
  background-color: #fff;
  border: 1px solid ${color.grayscale.gray[200]};
  border-radius: 8px;
  padding: 20px;
  /* animation: ${slideUpAnimation} 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55); */
  animation: ${growAnimation} 0.3s ease-in-out;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`
