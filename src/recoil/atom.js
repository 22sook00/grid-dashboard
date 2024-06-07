import { atom } from 'recoil'

export const gridDashboardState = atom({
  key: 'gridDashboardState',
  default: [
    { w: 3, h: 3, x: 0, y: 0, i: 'a', static: true },
    { w: 2, h: 3, x: 3, y: 0, i: 'b', minW: 2, maxW: 4 },
    { w: 3, h: 3, x: 5, y: 0, i: 'c' },
    { w: 2, h: 5, x: 0, y: 3, i: 'd' },
    { w: 4, h: 5, x: 2, y: 3, i: 'e', minW: 1, maxW: 8 },
    { w: 2, h: 5, x: 6, y: 3, i: 'f' },
    { w: 3, h: 6, x: 0, y: 8, i: 'g' },
    { w: 3, h: 6, x: 3, y: 8, i: 'h', minW: 2, maxW: 4 },
    { w: 2, h: 6, x: 6, y: 8, i: 'i' },
  ],
})
