import { FC } from 'react';
import { Component } from "./Popup.styles"

// components
import Balloon from '@/components/Balloon/Balloon';

interface PopUpProps {}

const PopUp: FC<PopUpProps> = () => {
  return (
    <Component>
      <Balloon />
    </Component>
  )
}

export default PopUp