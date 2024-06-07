import React, { useState } from 'react'
import { WidthProvider, Responsive } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const AddRemoveLayout = props => {
  const [items, setItems] = useState(
    [0, 1, 2, 3, 4].map((i, _, list) => ({
      i: i.toString(),
      x: i * 2,
      y: 0,
      w: 2,
      h: 2,
      add: i === list.length - 1,
    }))
  )
  const [newCounter, setNewCounter] = useState(0)
  const [breakpoint, setBreakpoint] = useState(null)
  const [cols, setCols] = useState(props.cols.lg)
  const [layout, setLayout] = useState([])

  const onAddItem = () => {
    console.log('adding', 'n' + newCounter)
    setItems([
      ...items,
      {
        i: 'n' + newCounter,
        x: (items.length * 2) % (cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      },
    ])
    setNewCounter(newCounter + 1)
  }

  const onRemoveItem = i => {
    console.log('removing', i)
    setItems(items.filter(item => item.i !== i))
  }

  const onBreakpointChange = (breakpoint, cols) => {
    setBreakpoint(breakpoint)
    setCols(cols)
  }

  const onLayoutChange = layout => {
    // props.onLayoutChange(layout)
    setLayout(layout)
  }

  const createElement = el => {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    }
    const i = el.add ? '+' : el.i
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span className="add text" onClick={onAddItem} title="You can add an item by clicking here, too.">
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span className="remove" style={removeStyle} onClick={() => onRemoveItem(i)}>
          x
        </span>
      </div>
    )
  }

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout onLayoutChange={onLayoutChange} onBreakpointChange={onBreakpointChange} {...props}>
        {items.map(el => createElement(el))}
      </ResponsiveReactGridLayout>
    </div>
  )
}

AddRemoveLayout.defaultProps = {
  className: 'layout',
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight: 100,
}

export default AddRemoveLayout
