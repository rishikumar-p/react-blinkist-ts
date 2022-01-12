import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookCard from './BookCard';

const books = [
    {
        id: 2,
        title: "Dropshipping",
        author: "James Moore",
        duration: 30,
        category: "Entrepreneurship",
        image: "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
        isInMyLibrary: true,
        isFinished: false
    },
    {
        id: 3,
        title: "The Bully Pulpit",
        author: "Goodwin",
        duration: 19,
        category: "Politics",
        image: "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
        isInMyLibrary: false,
        isFinished: false
    },
]




describe('Book Card', () => {
    it('Book in the Library', () => {
        render(<BookCard
            id={books[0].id}
            title={books[0].title}
            author={books[0].author}
            duration={books[0].duration}
            category={books[0].category}
            image={books[0].image}
            isFinished={books[0].isFinished}
            isInMyLibrary={books[0].isInMyLibrary}
        />);
        
    });

    it('Book not in the Library', () => {
        render(<BookCard
            id={books[1].id}
            title={books[1].title}
            author={books[1].author}
            duration={books[1].duration}
            category={books[1].category}
            image={books[1].image}
            isFinished={books[1].isFinished}
            isInMyLibrary={books[1].isInMyLibrary}
        />);
        
    });
});