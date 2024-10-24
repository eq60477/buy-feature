import React from "react";
import { Button as RadixButton, ButtonProps } from "@radix-ui/themes";

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
  variant,
  size,
  style
}) => {
  return (
    <RadixButton
      onClick={onClick}
      className={className}
      variant={variant}
      size={size}
      style={{ cursor: 'pointer', ...style }}
    >
      {title}
    </RadixButton>
  );
};

export default Button;
