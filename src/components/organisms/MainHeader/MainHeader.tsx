import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../../atoms/Logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import CustomIconButton from "../../atoms/Buttons/CustomIconButton";
import ExpoloreDialog from "../Explore/ExploreDialog";
import Box from "@mui/material/Box";
import AccountDropDown from "../../molecules/Account/AccountDropDown";
import { Link } from "react-router-dom";
import "@fontsource/raleway";

export default function MainHeader() {
  return (
      <AppBar position="static" elevation={0} color="transparent" data-testid="main-header">
        <Toolbar>
          <Box sx={{width: "150px"}}>
            <Link to="/myLibrary" style={{ textDecoration: 'none' }}>
              <Logo />
            </Link>
          </Box>
          <Box sx={{width: "50px"}}>
            <CustomIconButton icon={<SearchIcon />}  testId="searchIcon-button"/>
          </Box>
          <Box sx={{width: "120px"}}>
            <ExpoloreDialog />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Button
               href="/myLibrary" 
               variant="text"  
               size="large" 
               data-testid="myLibrary-button"
               disableTouchRipple
               disableRipple
               sx={{
                backgroundColor: "#FFFFFF",
                borderBottom: "3px solid #FFFFFF",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  borderBottom: "3px solid #2CE080",
                  borderRadius: 0
                },
                 textDecoration: 'none', 
                  textTransform: 'none', 
                  color: '#03314B', 
                  fontFamily: "Raleway", 
                  fontSize: 18
                }}>
                  My Library 
                </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <AccountDropDown />
          </Box>
        </Toolbar>
      </AppBar>
  );
}
