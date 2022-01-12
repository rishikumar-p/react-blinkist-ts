import * as React from "react";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { categories, categoryIcons } from "../../../data/booksdata";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import EndIconButton from "../../atoms/Buttons/EndIconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@material-ui/core";
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


export default function ExpoloreDialog() {
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
                <EndIconButton
                    endIcon={(icon === 0 && <KeyboardArrowDownIcon />) || <KeyboardArrowUpIcon />}
                    id="explore-button"
                    onClick={handleClick}
                    label="Explore"
                    variant="text"
                    size="large"
                    testId="explore-button"

                />
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
                                    <Grid item key={index} xs={12} sm={4} md={4}>
                                        <Link to={`/explore/${categoryName}`} style={{ textDecoration: "none" }}>
                                            <StyledMenuItem onClick={handleClose}>
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








// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Container from "@mui/material/Container";
// import { categories, categoryIcons } from "../../../data/booksdata";
// import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
// import EndIconButton from "../../atoms/Buttons/EndIconButton";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Divider } from "@material-ui/core";
// import { Typography } from "@mui/material";
// import "@fontsource/raleway";

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#03314B",//grey
//         },
//         secondary: {
//             main: "#F1F6F4",//bg
//         },
//         text: {
//             primary: "#03314B",
//             secondary: "#116BE9"
//         }
//     },
//     typography: {
//         fontFamily: "Raleway",
//         h6: {
//             fontWeight: 900,
//             color: "#116BE9"
//         },
//     },

//     components: {
//         MuiButtonBase: {
//             defaultProps: {
//               disableRipple: true,
//             },
//           },
//         MuiLink: {
//             defaultProps:{
                
//             },
//             styleOverrides: {
//                 root: {
//                   textDecoration: 'none'
//                 },
//               },
//         },
//         MuiMenuItem: {
//             styleOverrides: {
//                 root: {
//                   fontSize: '1rem',
//                 },
//               },
//         },

//     },
// });


// const StyledMenu = withStyles({
//     paper: {
//         backgroundColor: "#F1F6F4",
//         textColor: "#6D787E",
//         width: "100%",
//         paddingTop: "20px",
//         paddingBottom: "50px",
//         paddingLeft: "30px",
//     },

// })((props) => (
//     <Menu
//         id="explore-menu"
//         anchorEl={props.anchorEl}
//         elevation={0}
//         anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//         }}
//         transformOrigin={{
//             vertical: "top",
//             horizontal: "center",
//         }}
//         {...props}
//     />
// ));

// const StyledMenuItem = withStyles({
//     root: {
//         id: "menu-explore",
//         textAlign: "left",
//         alignItems: "right",
//         color: "#6D787E",
//         textColor: "#6D787E",
//         underline: "none",
//         "&:hover": {
//             color: "#116BE9",
//             backgroundColor: "#F1F6F4",
//         },
//     },
// })(MenuItem);

// export default function ExpoloreDialog() {
//     const [anchorEl, setAnchorEl] = React.useState<EventTarget | null>(null);
//     const [icon, setIcon] = React.useState(0);
//     const open = Boolean(anchorEl);
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//         icon ? setIcon(0) : setIcon(1);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//         icon ? setIcon(0) : setIcon(1);
//     };

//     return (
//         <div>
//             <ThemeProvider theme={theme}>
//                 <EndIconButton
//                     endIcon={(icon === 0 && <KeyboardArrowDownIcon />) || <KeyboardArrowUpIcon />}
//                     id="explore-button"
//                     onClick={handleClick}
//                     label="Explore"
//                     variant="text"
//                     size="large"

//                 />
//                 <StyledMenu
//                     aria-labelledby="explore-button"
//                     anchorEl={anchorEl}
//                     keepMounted
//                     open={open}
//                     onClose={handleClose}
//                     alignItems={"left"}
//                 >
//                     <Container>
//                         <Typography variant="h6" component="h1" fontWeight="bold"> Explore by category</Typography><br />
//                         <Divider />
//                         <br /><br />
//                         <Grid container rowGap={2} spacing={1}>
//                             {categories.map((categoryName: string, index: number) => {
//                                 return (
//                                     <Grid item key={index} xs={12} sm={4} md={4}>
//                                         <Link to={`/explore/${categoryName}`} style={{ textDecoration: "none" }}>
//                                             <StyledMenuItem onClick={handleClose}>
//                                                 {/* <Stack direction="row" spacing={2}> */}
//                                                 {categoryIcons[index]}
//                                                 {categoryName}
//                                                 {/* </Stack> */}
//                                             </StyledMenuItem>
//                                         </Link>
//                                     </Grid>
//                                 );
//                             })}
//                         </Grid>
//                     </Container>
//                 </StyledMenu>
//             </ThemeProvider>
//         </div>
//     );
// }
