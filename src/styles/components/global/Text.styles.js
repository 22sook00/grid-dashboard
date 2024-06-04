import { css } from '@emotion/react'
import { color, color as colors } from 'src/styles/values/color'
import { utils } from 'src/styles/values/utils'
import styled from '@emotion/styled'
import { typography } from 'src/styles/values/typography'

const limitTextLine = css`
  ${utils.ellipsis}
  display: -webkit-box;
  -webkit-line-clamp: 6;
  white-space: normal;
  -webkit-box-orient: vertical;
`

const getColor = type => {
  switch (type) {
    case 'error':
      return colors.system.error.red[300]
    case 'primary':
      return colors.primary.purple[300]
    case 'sub':
      return '#999999'
    default:
      return colors.text.default
  }
}

const getSize = size => {
  switch (size) {
    case 'xs':
      return '10px'
    case 'sm':
      return '12px'
    default:
      return '14px'
  }
}

export const Text = styled.span`
  color: ${({ type }) => getColor(type)};
  font-size: ${({ size }) => getSize(size)};
  font-weight: ${({ weight }) => weight || 400};
`

export const ErrorText = styled.p`
  color: ${colors.system.error.red[300]};
  ${typography.body.S}
  word-break: keep-all;
`

export const Description = styled.span`
  display: block;
  margin-top: ${({ marginTop }) => marginTop || '4px'};
  color: ${({ sub }) => (sub ? colors.grayscale.gray[600] : colors.primary.purple[300])};
  word-break: keep-all;
  ${typography.body.S}
`

export const EllipsisText = styled.span`
  ${utils.ellipsis}
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};

  ${({ line }) =>
    line &&
    `
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    white-space: normal;
    -webkit-box-orient: vertical;

  `}
`

export const H1 = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.h1};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
`
export const H2 = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.h2};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
`
export const H3 = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.h3};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
`
export const H4 = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.h4};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
`
export const BodyXL = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.body.XL};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};

  b {
    font-weight: 700;
  }
`
export const BodyL = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.body.L};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};

  b {
    font-weight: 700;
  }
`
export const BodyR = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.body.R};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};

  b {
    font-weight: 700;
  }
`
export const BodyS = styled.span`
  color: ${({ color }) => color || colors.text.default};
  ${typography.body.S};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};

  b {
    font-weight: 700;
  }
`

export const AsteriskContainer = styled.span`
  position: relative;
`

export const Asterisk = styled.span`
  ::after {
    content: '*';
    position: absolute;
    top: -7px;
    right: -10px;
    color: ${color.system.error.red[300]};
    ${typography.h2}
  }
`
