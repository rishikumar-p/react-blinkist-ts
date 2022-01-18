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

    test('checking the tabs in my library', () => {
        render(<MyLibrary/>);
        const tabs = screen.getAllByRole("tab");
        expect(tabs).toBeTruthy();
        expect(tabs[0].textContent).toBe("Currently Reading");
        fireEvent.click(tabs[0]);
        const tabPanel1 = screen.getByRole("tabpanel");
        expect(tabPanel1).toBeTruthy();
        expect(tabPanel1).toBeVisible();
        expect(tabPanel1.id).toContain("currentlyReading");
        const grid1 = screen.getByTestId("card-grid");
        expect(grid1).toBeVisible();

        expect(tabs[1].textContent).toBe("Finished");
        fireEvent.click(tabs[1]);
        const tabPanel2 = screen.getByRole("tabpanel");
        expect(tabPanel2).toBeTruthy();
        expect(tabPanel2).toBeVisible();
        expect(tabPanel2.id).toContain("finished");
        const grid2 = screen.getByTestId("card-grid");
        expect(grid2).toBeVisible();
    })
});