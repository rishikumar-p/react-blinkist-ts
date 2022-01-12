import * as React from 'react';
import Container from '@mui/material/Container';
import MyLibraryTab from '../../organisms/MyLibraryTab/MyLibraryTab';


export default function MyLibrary() {
  return (
      <Container maxWidth="lg">
        <br/><h1>My Library</h1><br/><br/><br/>
        <MyLibraryTab/>
      </Container>
    );
}     