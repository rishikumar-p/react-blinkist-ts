import * as React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Container from '@mui/material/Container';
import CardGrid from '../../organisms/CardGrid/CardGrid';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import api from '../../../api/books';

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

const Explore = () => {
  const [selectedCategoryBooks, setSelectedCategoryBooks] = useState([]);
  const [resultBooks, setResultBooks]= useState([]);
  const [searchedText, setSearchedText] = useState('');
  const selectedCategory = useParams().category;
  console.log("Params",useParams().category);

  const  retrieveBooks = async () => {
    let response = await api.get(`/books/?category=${selectedCategory}`);
    return response.data;
  };

  useEffect(()=>{
    const getBooks = async () => {
      let books = await retrieveBooks();
      setSelectedCategoryBooks(books);
    }
    getBooks();
  },[]);

  useEffect(()=>{
    const getBooks = async () => {
      let books = await retrieveBooks();
      setSelectedCategoryBooks(books);
      setResultBooks(books)
    }
    getBooks();
  },[selectedCategory]);

  const handleSearch = (input: string) => {
    input = input.trim();
    setSearchedText(input);
    if(input && searchedText.length === 0) {
       setResultBooks(selectedCategoryBooks);
    }
    else{
      let res = selectedCategoryBooks.filter((book: Book) => {
        return book.title.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1 || 
                    book.author.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1;
      });
      setResultBooks(res);
    }
  };


  return (
      <Container>
        <br/>
        <br/>
        <SearchInput onChange={handleSearch}/>
        <br/>
        <br/>
        <CardGrid books={resultBooks}/>
      </Container>
    );
}

export default Explore;