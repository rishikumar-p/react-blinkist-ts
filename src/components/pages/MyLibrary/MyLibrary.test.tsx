import React from 'react';
import MyLibrary from './MyLibrary';
import { fireEvent, render, screen } from '@testing-library/react';
jest.unmock('axios');


describe('My Library', () => {
    test('checking the buttom label', () => {
        render(<MyLibrary/>);
        const myLibrary = screen.getByTestId("myLibrary");
        expect(myLibrary).toBeTruthy();
        expect(myLibrary).toBeVisible();
        const cardGrid = screen.getByTestId("card-grid");
        expect(cardGrid).toBeVisible();
    });
});