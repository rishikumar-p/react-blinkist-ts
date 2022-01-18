import React from 'react';
import Button from '@mui/material/Button';

interface DefaultButtonProps{
    variant: "text" | "outlined" | "contained" | undefined,
    color?: 'inherit' | 'primary' | 'secondary' ,
    size?: "small" | "medium" | "large" ,
    onClick?: ()=>void,
    label: string,
    testId?: string
}

const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <Button
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      size={props.size}
      disableRipple={true}
      data-testid={props.testId}
      style={{textTransform: "none"}}
    >
      {props.label}
    </Button>
  );
};

export default DefaultButton;