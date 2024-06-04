import styled from '@emotion/styled'
import { color } from 'src/styles/values/color'
import { typography } from 'src/styles/values/typography'
import { FlexBox } from './Flex.styles'
import { Description } from './Text.styles'

export const ImageHiddenInput = styled.input`
  display: none;
`
export const ImageContainer = styled.div`
  position: relative;
  > p {
    position: absolute;
    width: 300px;
  }
`

export const ImageTitle = styled(FlexBox)`
  gap: 3px;
  justify-content: flex-start;
  height: 22px;
  color: ${color.grayscale.gray[600]};
  margin-bottom: 5px;
  > h3 {
    ${typography.h3};
    width: fit-content !important;
    font-weight: 700 !important;
  }
  > p {
    ${typography.body.S}
    line-height: 22px;
  }
`
export const ImageDesc = styled(Description)`
  width: 100%;
  font-size: 12px;
  line-height: 145%;
  margin: 10px 0;
`

export const ImagePreview = styled(FlexBox)`
  overflow: hidden;
  position: relative;

  width: ${({ width }) => width || '80px'};
  height: ${({ width }) => width || '80px'};

  background: ${color.grayscale.gray[100]};
  outline-color: ${({ error }) => error && color.error};
  border-radius: ${({ borderRadius }) => borderRadius || '14px'};
  cursor: ${({ cursor }) => cursor || 'pointer'};

  .default-image-add {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  &:hover {
    .imageRemove {
      display: block;
    }

    .default-image-add {
      display: block;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ImageAddLabel = styled.div`
  position: relative;
  width: ${({ width }) => width || '90px'};
  height: ${({ width }) => width || '90px'};
  background: ${({ isDefault }) => (isDefault ? 'rgba(244, 244, 246, 0.8)' : color.grayscale.gray[100])};
  border-radius: 14px;
  border-width: 1px;
  border-style: dashed;
  border-color: ${({ error }) => (error ? color.system.error.red[300] : color.border.default)};
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 1.5px;
    background-color: ${color.grayscale.gray[600]};
    content: '';
  }
  &::after {
    transform: translate(-50%) rotate(90deg);
  }
`

export const ImageRemove = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 14px;
    right: 4px;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

export const ImageViewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  width: 100%;
  height: 100%;

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1;

    svg {
      color: #fff;
      width: 50px;
      height: 50px;
      path {
        fill: #fff;
      }
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #fff;
    text-shadow: 0 0 8px #00000040;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    width: 12px;
    height: 12px;
  }
`

export const ImageViewerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const ImageViewerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`
