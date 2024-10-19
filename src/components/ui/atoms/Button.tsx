import React from 'react'
import {Button as RadixButton, ButtonProps } from "@radix-ui/themes";

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => {
  return (
    <RadixButton onClick={onClick} className={className}>
      {title}
    </RadixButton>
  )
}

export default Button
