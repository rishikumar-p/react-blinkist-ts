import React from 'react';
import {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardGrid from "../CardGrid/CardGrid";
import api from '../../../api/books';
import { AxiosResponse } from "axios";
import { createTheme, ThemeProvider} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#2CE080",
        },
    },
    typography: {
      fontFamily: "Raleway",
    }
});

export default function MyLibraryTab() {
  const [value, setValue] = useState("currentlyReading");
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const  retrieveBooks = async (tab: string) => {
    let response: AxiosResponse;
    if(tab === "currentlyReading"){
      response = await api.get("/books",{
        params: {
          isInMyLibrary:true,
          isFinished:false
        }
      });
    } else {
      response = await api.get("/books", {
        params: {
          isInMyLibrary:true,
          isFinished:true
        }
      });
    }
    return response.data;
  };

  useEffect(()=>{
    const getBooks = async () => {
      let currBooks = await retrieveBooks("currentlyReading");
      let finBooks = await retrieveBooks("finished");
      setCurrentlyReadingBooks(currBooks);
      setFinishedBooks(finBooks);
    }
    getBooks();
  },[]);

  return (
    <Box >
      <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} width="700px" marginBottom={2}>
          <TabList onChange={handleChange}  scrollButtons={true} aria-label="my library tabs"  indicatorColor="primary">
            <Tab disableRipple={true} label="Currently Reading" value="currentlyReading" sx={{width:'50%', textTransform: "none", fontSize: "16px", fontWeight: "bold", fontFamily:"Raleway"}}/>
            <Tab disableRipple={true} label="Finished" value="finished" sx={{width:'50%', textTransform: "none", fontSize: "16px",  fontWeight: "bold", fontFamily:"Raleway"}}/>
          </TabList>
        </Box>
        <TabPanel value="currentlyReading">
          <CardGrid books={currentlyReadingBooks}></CardGrid>
        </TabPanel>
        <TabPanel value="finished">
          <CardGrid books={finishedBooks}></CardGrid>
        </TabPanel>
      </TabContext>
      </ThemeProvider>
    </Box>
  );
}
