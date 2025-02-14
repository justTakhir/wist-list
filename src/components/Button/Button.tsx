import React from "react";

type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

export function Button({text, classes, onClick}: ButtonProps) {
  return <button className={classes} onClick={onClick}>
    {text}
  </button>;
}