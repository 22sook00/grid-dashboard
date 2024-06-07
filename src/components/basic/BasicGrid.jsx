import React, { useState } from 'react'

import GridLayout from 'react-grid-layout'
import * as SC from 'src/styles/components/grid/Grid.styles'
import { CloseIcon } from '../icon/X'
import { TextSC } from 'src/styles/components/global'
const BasicGrid = () => {
  const initialLayout = [
    { w: 3, h: 3, x: 0, y: 0, i: 'a', static: true },
    { w: 2, h: 3, x: 3, y: 0, i: 'b', minW: 2, maxW: 4 },
    { w: 3, h: 3, x: 5, y: 0, i: 'c' },
    { w: 2, h: 5, x: 0, y: 3, i: 'd' },
    { w: 4, h: 5, x: 2, y: 3, i: 'e', minW: 1, maxW: 8 },
    { w: 2, h: 5, x: 6, y: 3, i: 'f' },
    { w: 3, h: 6, x: 0, y: 8, i: 'g' },
    { w: 3, h: 6, x: 3, y: 8, i: 'h', minW: 2, maxW: 4 },
    { w: 2, h: 6, x: 6, y: 8, i: 'i' },
  ]

  const [layout, setLayout] = useState(initialLayout)
  const handleLayoutChange = newLayout => {
    setLayout(newLayout)
    // console.log('GRID::', newLayout)
  }
  const handleRemoveGridItem = (e, itemId) => {
    console.log('REMOVE::', itemId)
    e.stopPropagation()
    const newLayout = layout.filter(item => item.i !== itemId)
    setLayout(newLayout)
  }
  const removeStyle = {
    position: 'absolute',
    right: '2px',
    top: 0,
    cursor: 'pointer',
  }
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={handleLayoutChange}
    >
      {layout.map((data, idx) => {
        return (
          <SC.BasicGridContainer key={data.i}>
            <h1>{idx + 1}</h1>
            {data?.static && <TextSC.Description>STATIC</TextSC.Description>}
            {!data?.static && (
              <SC.GridDeleteContainer onClick={e => handleRemoveGridItem(e, data.i)}>
                <CloseIcon />
              </SC.GridDeleteContainer>
            )}
          </SC.BasicGridContainer>
        )
      })}
    </GridLayout>
  )
}

export default BasicGrid
