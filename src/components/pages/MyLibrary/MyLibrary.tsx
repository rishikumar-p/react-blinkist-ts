import * as React from 'react';
import MyLibraryTab from '../../organisms/MyLibraryTab/MyLibraryTab';
import  Box  from '@mui/material/Box';


export default function MyLibrary() {
  return (
      <Box sx={{paddingLeft: "50px"}} data-testid="myLibrary">
        <br/><h1>My Library</h1><br/><br/><br/>
        <MyLibraryTab/>
      </Box>
    );
}     