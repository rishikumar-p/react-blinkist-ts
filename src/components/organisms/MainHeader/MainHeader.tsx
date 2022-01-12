import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LogoButton from "../../atoms/Logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import CustomIconButton from "../../atoms/Buttons/CustomIconButton";
import ExpoloreDialog from "../Explore/ExploreDialog";
import DefaultButton from "../../atoms/Buttons/DefaultButton";
import Box from "@mui/material/Box";
import AccountDropDown from "../../molecules/Account/AccountDropDown";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import "@fontsource/raleway";
import { ThemeProvider } from '@material-ui/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#22c870",
    },
    text: {
      primary: "#03314B"
    }
  },
  components: {
    MuiButton:{
      defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
    MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
          
        },
        styleOverrides: {
          root:{
            textDecoration: "none",
            textTransform: "none",
            "&:hover":{
              backgroundColor: "#FFFFFF",
              borderBottom: "2px solid",
              bordorColor: "#2CE080F"
            }
          }
        }
      },
    }
});

export default function MainHeader() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" elevation={0} color="primary">
        <Toolbar>
          <Box>
            <Link to="/myLibrary" style={{ textDecoration: 'none' }}>
              <LogoButton />
            </Link>
          </Box>
          <Box>
            <CustomIconButton icon={<SearchIcon />}  testId="searchIcon-button"/>
          </Box>
          <Box>
            <ExpoloreDialog />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/myLibrary" style={{ textDecoration: 'none' }}>
              <DefaultButton variant="text" label="My Library" size="large"  testId="myLibrary-button"/>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <AccountDropDown />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
