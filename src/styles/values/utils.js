import { css } from '@emotion/react'

export const utils = {
  ellipsis: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  cancelLine: css`
    margin-right: 4px;
    text-decoration: line-through;
    color: #999999;
  `,
  // scrollBar: css`
  //   &::-webkit-scrollbar {
  //     width: 4px;
  //     height: 4px;
  //   }
  //   &::-webkit-scrollbar-thumb {
  //     height: 30%;
  //     background: ${color.grayscale.gray[200]};
  //     border-radius: 20px;
  //   }
  //   &::-webkit-scrollbar-track {
  //     background: #ffffff;
  //   }
  // `,
}
