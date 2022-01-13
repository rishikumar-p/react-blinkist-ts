import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../../atoms/Logo/Logo";
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
import { fontFamily } from "@mui/system";

export default function MainHeader() {
  return (
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <Box>
            <Link to="/myLibrary" style={{ textDecoration: 'none' }}>
              <Logo />
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
              <Button variant="text"  size="large" data-testid="myLibrary-button" style={{ textDecoration: 'none', textTransform: 'none', color: '#03314B', fontFamily: "Raleway", fontSize: 16}}> My Library </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <AccountDropDown />
          </Box>
        </Toolbar>
      </AppBar>
  );
}
