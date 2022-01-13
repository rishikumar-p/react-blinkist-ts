import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardGrid from './CardGrid';
import { BrowserRouter } from 'react-router-dom';

const bookList = [
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
        isInMyLibrary: true,
        isFinished: false
    },
    {
        id: 4,
        title: "Genesis",
        author: "Guido Tonelli",
        duration: 25,
        category: "Science",
        image: "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
        isInMyLibrary: true,
        isFinished: false
    },
    {
        id: 5,
        title: "Exercised",
        author: "Daniel E. Lieberman",
        duration: 20,
        category: "Science",
        image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
        isInMyLibrary: true,
        isFinished: false
    },
    {
        id: 6,
        title: "Forest Bathing",
        author: "Qing Li",
        duration: 12,
        category: "Health",
        image: "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
        isInMyLibrary: false,
        isFinished: false
    },
    {
        id: 7,
        title: "Beyond Entrepreneurship 2.0",
        author: "Jim Collins and Bill Lazier",
        duration: 15,
        category: "Entrepreneurship",
        image: "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
        isInMyLibrary: false,
        isFinished: false
    },
]

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

const MockCardGrid = (props: cardGridProps) => {
    return <BrowserRouter>
        <CardGrid books={props.books} />
    </BrowserRouter>
}
describe('Card Grid', () => {
    it('Should render book card', async () => {
        render(<MockCardGrid books={bookList} />);
        const bookCard = screen.getByTestId("book-card-2");
        expect(bookCard).toBeInTheDocument();
    });

    it('Should render multiple book cards', () => {
        render(<MockCardGrid books={bookList} />);
        const bookCards = screen.getAllByTestId(/book-card/i);
        expect(bookCards).toBeTruthy();
        expect(bookCards.length).toBe(6);
    });
});