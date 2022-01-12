import { createTheme } from "@mui/material/styles";
import "@fontsource/raleway";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#0365F2",
        },
        secondary: {
            main: "#2CE080",
        },
        success: {
            main: '#22c870'
        }
    },

    typography: {
        fontFamily: "Raleway",
        body1: {
            fontSize: "16px",
            lineHeight: "20px",
            fontFamily: "Raleway",
        },
        subtitle1: {
            fontSize: "18px",
            lineHeight: "24px",
            fontFamily: "Raleway",
            fontWeight: "bold",
        },
        caption: {
            fontSize: "14px",
            lineHeight: "18px",
            fontFamily: "Raleway",
        },
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    fontFamily: "Raleway",
                    backgroundColor: "#FFFFFF",
                    color: "#03314B",
                },
                colorPrimary: {
                    backgroundColor: "#FFFFFF",
                    color: "#03314B",
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    color: "#03314B",
                },
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: "18px",
                    lineHeight: "20px",
                    color: "#03314B",
                    padding: "10px",
                    width: 120,
                    textColor: "#03314B",
                    disableRipple: true,
                    disableTouchRipple: true,
                    disableElevation: true,
                },
                containedSecondary: {
                    backgroundColor: "#FFFFFF",
                    color: "#0365F2",
                    "&:hover": {
                        color: "#FFFFFF",
                        textDecoration: "none",
                        backgroundColor: "#0365F2",
                    },
                    disableRipple: true,
                    disableTouchRipple: true,
                    disableElevation: true,
                },
                textSecondary: {
                    color: "#000000",
                    "&:hover": {
                        borderBottom: "1px solid",
                    },
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                    disableTouchRipple: true
            },
        
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    spacing: 10,
                },
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: "283px",
                    height: "286px",
                },
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: "286px",
                    height: "504px",
                },
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    width:"283px",
                    height:"140px",
                    paddingBottom: 10,
                    "&:last-child": {
                        paddingBottom: 10,
                    },
                },
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: 0,
                    borderRadius: 4,
                    border: 1,
                },
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F1F6F4",
                },
            }
        },
        MuiListItem: {},
        MuiGrid: {},
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Raleway",
                },
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                },
            },
        },

    }
});

export default theme;
