import AddRemoveLayout from '@/components/basic/AddRemoveGrid'
import BasicGrid from '@/components/basic/BasicGrid'
import Widget from '@/components/widget/Widget'
import React from 'react'

const Grid = () => {
  const props = {
    className: 'layout',
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
  }
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <BasicGrid />
      <Widget />
      {/* <AddRemoveLayout props={props} /> */}
    </div>
  )
}

export default Grid
