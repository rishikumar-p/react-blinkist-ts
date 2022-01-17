import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import accountIcon from "./accountIcon.png";
import { Box, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#03314B",
        },
        text: {
            primary: "#03314B",
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "16px",
                    boxShadow: "none",

                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    marginLeft: 15,
                    marginRight: 15,
                },
            },
        },

        MuiMenuItem: {
            styleOverrides: {
                root: {
                    width: 160,
                    fontSize: 16,
                    fontFamily: "Raleway",
                    "&:hover": {
                        backgroundColor: "#FFFFFF",
                        color: "#0365F2",
                    },
                    "&:focus": {
                        backgroundColor: "#FFFFFF",
                        color: "#0365F2",
                    },

                },
            },
        },
    },
});

export default function AccountDropdown() {
    const [opened, setOpened] = React.useState(false);
    const [icon, setIcon] = React.useState(<KeyboardArrowDownIcon />);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpened(!opened);
        setAnchorEl(event.currentTarget);
        if (opened) {
            setIcon(<KeyboardArrowDownIcon />);
        }
        else{
            setIcon(<KeyboardArrowUpIcon />);
        }
    };

    const handleClose = () => {
        setOpened(false);
        setAnchorEl(null);
        setIcon(<KeyboardArrowDownIcon />);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Button
                    id="account-button"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    endIcon={icon}
                    data-testid="account-dropdown-button"
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    sx={{
                        "&:hover": {
                            borderBottom: "3px solid #2CE080",
                        },
                        borderBottom:
                          opened === false
                            ? "3px solid transparent"
                            : "3px solid #00C263 ",
                        backgroundColor: "inherit",
                        borderRadius:0,
                      }}    
                >
                    <img src={accountIcon} alt="A" width="40px" height="40px" />
                </Button>
                <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "account-button",
                    }}
                    data-testid="account-dropdown-menu"
                >
                    <MenuList>
                        <MenuItem onClick={handleClose} data-testid="account-menu-item-1">Invite Friends</MenuItem>
                        <Divider />
                        <MenuItem color="secondary" onClick={handleClose} data-testid="account-menu-item-2">
                            Wishlist
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose} data-testid="account-menu-item-3">Settings</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose} data-testid="account-menu-item-4">Help</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose} data-testid="account-menu-item-5">Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </ThemeProvider>
    );
}
