import { FC } from 'react';
import { Component, Area } from "./Popup.styles"

// components
import Balloon from '@/components/Balloon/Balloon';

interface PopUpProps {}

const PopUp: FC<PopUpProps> = () => {
  return (
    <Component>
      <Area>
        <h2>{`Widget`}</h2>
      </Area>
      
      <Balloon />
    </Component>
  )
}

export default PopUp