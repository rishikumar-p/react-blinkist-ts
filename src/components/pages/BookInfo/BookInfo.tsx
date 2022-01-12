import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "@mui/material/Grid";
import BookCard from "../../molecules/BookCard/BookCard";
import bookimage from "./bookimage.png";
import { Divider, Typography } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { books } from "../../../data/booksdata";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import api from "../../../api/books";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface Book {
    id: number;
    title: string;
    author: string;
    duration: number;
    category: string;
    image: string;
    isInMyLibrary: boolean;
    isFinished: boolean;
  }

const theme = createTheme({
  palette: {
    primary: {
      main: "#22c870",
    },
    secondary: {
      main: "#0365F2",
    },
  },

  typography: {
    h5: {
      fontWeight: 'bold',
      lineHeight: 32
    },
    h4: {
      fontWeight: 900,
      fontColor: "#000000",
    },
    body1: {
      fontSize: 20,
      lineHeight: 26,
      fontWeight: 400
    },
    subtitle1:{
      fontSize: 20,
      lineHeight: 26,
      fontWeight: 400
    },
    subtitle2:{
      
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          width: 200,
          fontSize: 16,
        },
      },
    },
  }
});

export default function BookInfo() {
  const [value, setValue] = useState("1");
  const [inLibrary, setIsInLibrary] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const get = async () => {
      let book = await api.get(`/books/1`);
      let bookData: Book = await book.data;
      setIsInLibrary(bookData.isInMyLibrary);
      setFinished(bookData.isFinished);
    };
    get();
  }, []);

  useEffect(() => {
    const update = async () => {
      await api.put(`/books/1`, {
        title: "Beyond Entrepreneurship 2.0",
        author: "Jim Collins and Bill Lazier",
        duration: 15,
        category: "Entrepreneurship",
        image:
          "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
        isInMyLibrary: inLibrary,
        isFinished: finished,
      });
    };
    update();
  }, [inLibrary, finished]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleAddToLibrary = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsInLibrary(true);
  };

  const handleFinishedReading = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFinished(true);
  };

  return (
    <ThemeProvider theme= {theme}>
      <Container>
        <br />
        <h4>Get the Ideas from</h4>
        <Box display="flex">
          <Box width="60%">
            <Typography variant="h4">Beyond Entrepreneurship 2.0</Typography>
            <Typography variant="subtitle1">Turning Your Business into an Enduring Great Company</Typography>
            <Typography variant="subtitle2">By Jim Collins and Bill Lazier</Typography>
            <br />
            <Stack direction="row" spacing={1}>
              <>
                <AccessTimeIcon />
              </>
              <Typography variant="subtitle2">
                13-minute read
              </Typography>
            </Stack>
            <br />
            <br />
            <Stack spacing={2} direction="row">
              {!inLibrary && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToLibrary}
                  disableRipple={true}
                >
                  Add to Library
                </Button>
              )}
              {inLibrary && !finished && (
                <Button variant="contained" color="primary" disableRipple={true}>
                  Read now
                </Button>
              )}
              {inLibrary && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFinishedReading}
                  disableRipple={true}
                >
                  Finished Reading
                </Button>
              )}
            </Stack>
          </Box>
          <Box>
            <img
              src={bookimage}
              width="304px"
              height="304px"
              alt="Book"
              margin-top="20px"
            />
          </Box>
        </Box>
        <Box sx={{ typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                indicatorColor="primary"
              >
                <Tab sx={{ minWidth: "200px" }} label="Synopsis" value="1" />
                <Tab
                  sx={{ minWidth: "200px" }}
                  label="Who is it for?"
                  value="2"
                />
                <Tab
                  sx={{ minWidth: "200px" }}
                  label="About the author"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Typography variant="body1">
                Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
                Lazier’s essential 1992 business handbook, Beyond Entrepreneurship
                for the entrepreneurs, visionaries, and innovators of today. This
                new edition combines the timeless business advice and strategy of
                the original text, supplemented with cutting-edge insights and
                case studies pertinent to today’s business world.
              </Typography>
            </TabPanel>
            <TabPanel value="2">
              <Typography variant="body1">
                <ul>
                  <li>
                    Office drones who want to break out of their nine-to-five
                  </li>
                  <li>
                    Fledgling start-up founders wondering where to, well, start
                  </li>
                  <li>
                    Successful entrepreneurs looking to scale up to the big time
                  </li>
                </ul>
              </Typography>
            </TabPanel>
            <TabPanel value="3">
              <Typography variant="body1">
                Bill Lazier was professor of business at Stanford and a
                path-breaking entrepreneur. He was also mentor to Jim Collins, now
                a sought-after consultant and best-selling author of leadership
                books, including Good to Great and Built to Last. Together,
                Collins and Lazier authored Beyond Entrepreneurship. Lazier passed
                away in 2005; Collins has now revised and updated this classic
                business text for today’s entrepreneur.
              </Typography>
            </TabPanel>
          </TabContext>
        </Box>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <h2>Ready for more?</h2>
        <br />
        <Grid container spacing={3}>
          {books.slice(1, 4).map((book: Book, index: number) => {
            return (
              <Grid item key={index} xs={12} sm={4} md={4}>
                <BookCard
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  duration={book.duration}
                  category={book.category}
                  image={book.image}
                  isInMyLibrary={book.isInMyLibrary}
                  isFinished={book.isFinished}
                />
              </Grid>
            );
          })}
        </Grid>
        <br/><br/><br/>
      </Container>
     </ThemeProvider>
  );
}
