import Button from '@material-ui/core/Button';

interface EndIconButtonProps {
  id?: string,
  variant: 'text' | 'outlined' | 'contained',
  size?: 'small' | 'medium' | 'large',
  label: string,
  color?: 'primary' | 'secondary',
  endIcon: JSX.Element,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  testId: string,
};

const EndIconButton = (props: EndIconButtonProps) => {
  return (
    <Button
      id={props.id}
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      endIcon={props.endIcon}
      disableRipple={true}
      data-testid={props.testId}
    >
      {props.label}
    </Button>
  );
};

export default EndIconButton;