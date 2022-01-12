import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BookCard from "../../molecules/BookCard/BookCard";

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

interface cardGridProps {
  books: Book[]
}

const CardGrid = (props: cardGridProps) => {
  return (
    <Grid container spacing={3}>
      {console.log(props)}
      {props.books.map((book: Book, index: number) => {
        if (book.id === 1) {
          return (
            <Grid item key={index} xs={12} sm={4} md={4}>
              <Link to="/bookinfo" style={{textDecoration: "none"}}>
                <BookCard
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  duration={book.duration}
                  category={book.category}
                  image={book.image}
                  isFinished={book.isFinished}
                  isInMyLibrary={book.isInMyLibrary}
                />
              </Link>
            </Grid>
          );
        }
        return (
          <Grid item key={index} xs={12} sm={4} md={4}>
            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              duration={book.duration}
              category={book.category}
              image={book.image}
              isFinished={book.isFinished}
              isInMyLibrary={book.isInMyLibrary}
            />
          </Grid>
        );
      })}
    </Grid >
  );
};
export default CardGrid;

