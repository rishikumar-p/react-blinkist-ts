import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyLibrary from './components/pages/MyLibrary/MyLibrary';
import BookInfo from './components/pages/BookInfo/BookInfo';
import Explore from './components/pages/Explore/Explore';
import NotFound from './components/pages/NotFound';
import MainHeader from './components/organisms/MainHeader/MainHeader';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Theme/Theme';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme} >
        <Router>
          <MainHeader/>
          <Routes>
            <Route  path="/" element={<MyLibrary/>} />
            <Route  path="/myLibrary" element={<MyLibrary/>} />
            <Route  path="/explore/:category" element={<Explore/>} />
            <Route  path="/bookInfo" element={<BookInfo/>} />
            <Route  element={<NotFound/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App; 
