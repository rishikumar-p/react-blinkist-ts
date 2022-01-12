import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface CustomIconButtonProps{
    onClick?: ()=>void,
    size?: string,
    icon: JSX.Element
    testId: string
}

const CustomIconButton = (props: CustomIconButtonProps) => {
  return (
    <IconButton onClick={props.onClick}  disableRipple={true} data-testid={props.testId}>
        <SearchIcon/>
    </IconButton>
  );
};
export default CustomIconButton;
