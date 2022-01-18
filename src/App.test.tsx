import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
jest.unmock('axios');

describe('App', () => {
    test('Should display the app', () => {
        render(<App />);
        const app = screen.getByTestId("app");
        expect(app).toBeTruthy();
        expect(app).toBeVisible();
    });

    test('Should display the main header and myLibrary by default', () => {
        render(<App />);
        const mainHeader = screen.getByTestId("main-header");
        expect(mainHeader).toBeVisible();
        const myLibrary = screen.getByTestId("myLibrary");
        expect(myLibrary).toBeVisible();
        expect(window.location.pathname).toBe("/");
    });

    test('Should route to my library page on clicking My Library Button', async () => {
        render(<App />);
        const myLibrary = screen.getByTestId("myLibrary-button")
        expect(myLibrary).toBeTruthy();
        expect(myLibrary).toBeVisible();
        fireEvent.click(myLibrary);
        expect(window.location.pathname).toBe("/");
    });

    test('Should route to respective explore page on clicking category on explore dialog', async () => {
        render(<App />);
        const explore = screen.getByTestId("explore-button");
        fireEvent.click(explore);
        screen.getByRole("menu");
        const menuItems = screen.getAllByRole("menuitem");
        expect(menuItems.length).toBe(12);
        const entrepreneurshipCategory = screen.getByText("Entrepreneurship");
        fireEvent.click(entrepreneurshipCategory);
        expect(window.location.pathname).toBe("/explore/Entrepreneurship");
        const mainHeader = screen.getByTestId("main-header");
        expect(mainHeader).toBeVisible();
    });


});