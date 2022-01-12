import Button from '@material-ui/core/Button';

interface DefaultButtonProps{
    variant: "text" | "outlined" | "contained" | undefined,
    color?: "inherit" | "primary" | "secondary" | "default" | undefined,
    size?: "small" | "medium" | "large" | undefined,
    onClick?: ()=>void,
    label: string,
    testId: string
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
    >
      {props.label}
    </Button>
  );
};

export default DefaultButton;