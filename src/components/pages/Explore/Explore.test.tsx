import React from 'react';
import Explore from './Explore';
import { fireEvent, render, screen } from '@testing-library/react';
jest.unmock('axios');


describe('My Library', () => {
    test('checking the buttom label', async () => {
        render(<Explore />);
        const explorePage = await screen.findByTestId("explore-page");
        expect(explorePage).toBeTruthy();
        expect(explorePage).toBeVisible();
        const searchInput = await screen.findByTestId("searchInput");
        expect(searchInput).toBeVisible();
        const cardGrid = await screen.findByTestId("card-grid");
        expect(cardGrid).toBeVisible();
    });

    test('checking search field', async () => {
        render(<Explore />);
        const searchInput = await screen.findByTestId("searchInput");
        expect(searchInput).toBeVisible();
        const inputField = screen.getByPlaceholderText("Search by Title or Author");
        fireEvent.change(inputField, { target: { value: "Dropshipping" } });
        fireEvent.change(inputField, { target: { value: "" } });
    })
});