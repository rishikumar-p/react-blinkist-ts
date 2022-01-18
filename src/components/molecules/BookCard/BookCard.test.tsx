import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


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

function renderBookData(index: number){
    render(<BookCard
        id={books[index].id}
        title={books[index].title}
        author={books[index].author}
        duration={books[index].duration}
        category={books[index].category}
        image={books[index].image}
        isFinished={books[index].isFinished}
        isInMyLibrary={books[index].isInMyLibrary}
    />);
}




describe('Book Card', () => {
    describe('Book in the Library', () => {
        test('Book Card should be displayed', () => {
            renderBookData(0);
            const bookCardInLibrary = screen.getByTestId("book-card-2");
            expect(bookCardInLibrary).toBeTruthy();
            expect(bookCardInLibrary).toBeVisible();
        })

        test('Should display image, title, author and duration  of the book card', () => {
            renderBookData(0);
            const bookCardInLibrary = screen.getByTestId("book-card-2");
            expect(bookCardInLibrary).toBeTruthy();
            expect(bookCardInLibrary).toBeVisible();
            expect(bookCardInLibrary.textContent).toContain('Dropshipping');
            expect(bookCardInLibrary.textContent).toContain('James Moore');
            expect(bookCardInLibrary.textContent).toContain('30-minute read');
            const bookImg = screen.getByTestId("book-image-2");
            expect(bookImg).toBeTruthy()
        })

        test('Book Card should not have Add To Library Button, and have horizon button and progress bar',() => {
            renderBookData(0);
            const addToLibraryButton = screen.queryByRole("button");
            expect(addToLibraryButton).toBeFalsy();
            const progressBar = screen.getByTestId(/progress-bar/i);
            expect(progressBar).toBeTruthy();
            expect(progressBar).toBeVisible();
            const moreIcon = screen.getByTestId(/more-icon/i);
            expect(moreIcon).toBeTruthy();
            expect(moreIcon).toBeVisible();
            
        })
        
        
    });

    describe('Book not in the Library', () => {
        test('Book Card should be displayed', async () => {
            renderBookData(1);
            const bookCardNotInLibrary = screen.getByTestId("book-card-3");
            expect(bookCardNotInLibrary).toBeTruthy();
            expect(bookCardNotInLibrary).toBeVisible();
        })
        
        test('Should display title, author and duration  of the book card', () => {
            renderBookData(1);
            const bookCardInLibrary = screen.getByTestId("book-card-3");
            expect(bookCardInLibrary).toBeTruthy();
            expect(bookCardInLibrary).toBeVisible();
            expect(bookCardInLibrary.textContent).toContain('The Bully Pulpit');
            expect(bookCardInLibrary.textContent).toContain('Goodwin');
            expect(bookCardInLibrary.textContent).toContain('19-minute read');
        })

        test('Book Card should have Add To Library Button', async () => {
            renderBookData(1);
            const addToLibraryButton = await screen.findByRole("button");
            expect(addToLibraryButton).toBeTruthy();
            fireEvent.click(addToLibraryButton);
        })

        test('Book Card should have Add To Library Button, and not have horizon button and progress bar', async () => {
            renderBookData(1);
            const addToLibraryButton = await screen.findByRole("button");
            expect(addToLibraryButton).toBeTruthy();
            fireEvent.click(addToLibraryButton);
            const progressBar = screen.queryByTestId(/progress-bar/i);
            expect(progressBar).toBeFalsy();
            const moreIcon = screen.queryByTestId(/more-icon/i);
            expect(moreIcon).toBeFalsy();
        })
    });
});