import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { categories, categoryIcons } from "../../../data/booksdata";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import EndIconButton from "../../atoms/Buttons/EndIconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import "@fontsource/raleway";

const theme = createTheme({
    palette: {
        primary: {
            main: "#042330",//grey
        },
        secondary: {
            main: "#F1F6F4",//bg
        },
        text: {
            primary: "#03314B",
        }
    },
    typography: {
        fontFamily: "Raleway",
    },

    components: {
        MuiButton:{
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
              },
              styleOverrides: {
                  root:{
                    textTransform: "none",
                    backGoundColor: "#FFFFFF",
                    borderBottom: "3px solid #FFFFFF",
                    "&:hover": {
                      borderBottom: "3px solid #2CE080",
                      borderRadius: 0,
                    },
                    "&:active": {
                        borderBottom: "3px solid #2CE080",
                        borderRadius: 0,
                      },
                  }
              }
            },
        MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
              disableTouchRipple: true
            },
          },
        MuiLink: {
            defaultProps:{
                
            },
            styleOverrides: {
                root: {
                  textDecoration: 'none'
                },
              },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                  fontSize: '1rem',
                },
              },
        },

    },
});

  const StyledMenuItem = styled(MenuItem)({
        id: "menu-explore",
        textAlign: "left",
        alignItems: "right",
        color: "#042330",
        textColor: "#042330",
        underline: "none",
        "&:hover": {
            color: "#116BE9",
            backgroundColor: "#F1F6F4",
        },
    },
  );


export default function ExploreDialog() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [icon, setIcon] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        icon ? setIcon(0) : setIcon(1);
    };
    const handleClose = () => {
        setAnchorEl(null);
        icon ? setIcon(0) : setIcon(1);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button
                    endIcon={icon === 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    id="explore-button"
                    onClick={handleClick}
                    variant="text"
                    size="large"
                    data-testid="explore-button"
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    sx={{
                        borderBottom:
                          icon === 0
                            ? "3px solid transparent"
                            : "3px solid #00C263 ",
                        backgroundColor: "inherit",
                        borderRadius:0,
                        fontSize: "18px"
                      }}                   
                >
                    Explore
                    </Button>
                <Menu
                    id="explore-menu"
                    aria-labelledby="explore-button"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    elevation={0}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    PaperProps={{
                      style: {
                        width: "100%",
                        maxWidth: "100%",
                        marginTop: "20px",
                        paddingBottom: "30px",
                        left: 0,
                        right: 0,
                        backgroundColor: "#F1F6F4",
                        boxShadow: "0 0 0",
                      },
                    }}
                >
                    <Container>
                        <Typography variant="h6" component="h1" fontWeight="bold"> Explore by category</Typography><br />
                        <Divider />
                        <br /><br />
                        <Grid container rowGap={1} spacing={1}>
                            {categories.map((categoryName: string, index: number) => {
                                return (
                                    <Grid item key={categoryName} xs={12} sm={4} md={4}>
                                        <Link to={`/explore/${categoryName}`} style={{ textDecoration: "none" }}>
                                            <StyledMenuItem onClick={handleClose} data-testid={categoryName}>
                                                {categoryIcons[index]}
                                                &nbsp;&nbsp;
                                                {categoryName}
                                            </StyledMenuItem>
                                        </Link>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container>
                </Menu>
            </ThemeProvider>
        </div>
    );
}