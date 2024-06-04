import React, { useState } from 'react'

import GridLayout from 'react-grid-layout'
import * as SC from 'src/styles/components/grid/Grid.styles'
import { CloseIcon } from '../icon/X'
import { TextSC } from 'src/styles/components/global'
const BasicGrid = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 3, h: 3, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    { i: 'd', x: 3, y: 0, w: 3, h: 3 },
    { i: 'e', x: 4, y: 0, w: 3, h: 2, minW: 1, maxW: 8 },
    { i: 'f', x: 5, y: 0, w: 1, h: 2 },
    { i: 'g', x: 6, y: 0, w: 3, h: 3 },
    { i: 'h', x: 7, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  ]
  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <SC.BasicGridContainer key="a">
        <TextSC.H1>1</TextSC.H1>
        <TextSC.Description> STATIC</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="b">
        <TextSC.H1>2</TextSC.H1>
        <TextSC.Description> MIN:2칸 / MAX:4칸</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="c">
        <SC.GridDeleteContainer>
          <CloseIcon />
        </SC.GridDeleteContainer>
        <TextSC.H1>3</TextSC.H1>
        <TextSC.Description> 삭제가능</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="d">
        <TextSC.H1>4</TextSC.H1>
        <TextSC.Description> MIN:2칸 / MAX:4칸</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="e">
        <TextSC.H1>5</TextSC.H1>
        <TextSC.Description> MIN:2칸 / MAX:4칸</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="f">
        <TextSC.H1>6</TextSC.H1>
        <TextSC.Description> MIN:2칸 / MAX:4칸</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="g">
        <TextSC.H1>7</TextSC.H1>
        <TextSC.Description> MIN:2칸 / MAX:4칸</TextSC.Description>
      </SC.BasicGridContainer>
      <SC.BasicGridContainer key="h">
        <SC.GridDeleteContainer>
          <CloseIcon />
        </SC.GridDeleteContainer>
        <TextSC.H1>8</TextSC.H1>
        <TextSC.Description> MIN:2칸 / MAX:4칸</TextSC.Description>
      </SC.BasicGridContainer>
    </GridLayout>
  )
}

export default BasicGrid
