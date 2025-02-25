import React from 'react'
import Styles from './Button.module.css'
import { MdMessage } from "react-icons/md";

const Button = ({isOutline , icon, text, ...    rest} ) => {

//  const {isOutline , icon, text} = props;
  return (
    <button
    { ... rest}
     className={isOutline ? Styles.outline_btn : Styles.primary_btn}
 
    >
      {/* <MdMessage fontSize="24px" />
      VIA SUPPORT CHAT */}
{icon}
    {  text}
    </button>
  )
}

export default Button
