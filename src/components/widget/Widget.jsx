import React, { useState } from 'react'
import * as SC from 'src/styles/components/widget/Widget.styles'
import WidgetBox from './WidgetBox'
const Widget = () => {
  const [isOpenWidget, setIsOpenWidget] = useState(false)

  return (
    <div>
      <SC.WidgetIconContainer onClick={() => setIsOpenWidget(!isOpenWidget)}>#️⃣</SC.WidgetIconContainer>
      {isOpenWidget && <WidgetBox />}
    </div>
  )
}

export default Widget
