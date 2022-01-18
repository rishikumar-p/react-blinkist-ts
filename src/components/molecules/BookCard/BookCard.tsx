import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";
import progressBar from "./progressBar.png";
import { Stack, Button, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface BookCardProps {
    id: number;
    title: string;
    author: string;
    duration: number;
    category: string;
    image: string;
    isInMyLibrary: boolean;
    isFinished: boolean;
}

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
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    color: "#0365F2",
                    "&:hover": {
                        color: "#FFFFFF",
                        textDecoration: "none",
                        backgroundColor: "#0365F2",
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            },
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    color: "#0365F2",
                    "&:hover": {
                        color: "#FFFFFF",
                        textDecoration: "none",
                        backgroundColor: "#0365F2",
                    },
                }
            },
        },
    }
});


export default function BookCard(props: BookCardProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ borderRadius: 4 }}>
                <Card style={{ maxWidth: 284, maxHeight: 500, boxShadow: "none", }} data-testid={`book-card-${props.id}`}>
                    <CardMedia component="img"  image={props.image} alt={props.title}  data-testid={`book-image-${props.id}`}/>
                    <Box sx={{ borderLeft: 1, borderRight: 1, borderColor: "#BAC9CF" }}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                {props.title}
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                By {props.author}
                            </Typography>
                            <br />
                            <Stack direction="row" spacing={1}>
                                <AccessTimeIcon />
                                <Typography
                                    variant="caption"
                                >
                                    {props.duration}-minute read
                                </Typography>
                            </Stack>
                            <br />
                            {props.isInMyLibrary && (
                                <Box sx={{ ml: 28 }}>
                                    <MoreHorizIcon data-testid={`more-icon-${props.id}`}/>
                                </Box>
                            )}
                        </CardContent>
                    </Box>
                    <Box sx={{ border: 1, borderColor: "#BAC9CF" }}>
                        <CardActions disableSpacing style={{ padding: "0px" }}>
                            {!props.isInMyLibrary && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ height: "42px", padding: "0px" }}
                                >
                                    + Add to Library
                                </Button>
                            )}
                            {props.isInMyLibrary && (
                                <img src={progressBar} alt="progress bar" width="280px" data-testid={`progress-bar-${props.id}`}/>
                            )}
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
}
