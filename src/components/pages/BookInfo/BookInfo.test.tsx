import React from 'react';
import BookInfo from './BookInfo';
import { fireEvent, render, screen } from '@testing-library/react';
jest.unmock('axios');


describe('Explore', () => {
    test('checking the Explore', async () => {
        render(<BookInfo />);
        const bookImage = screen.getByTestId("book-image");
        expect(bookImage).toBeTruthy();
        expect(bookImage).toBeVisible();
        const bookInfoContent = screen.getByTestId("book-info-content");
        expect(bookInfoContent).toBeTruthy();
        expect(bookInfoContent).toBeVisible();
        expect(bookInfoContent.textContent).toContain("Beyond Entrepreneurship 2.0");
        expect(bookInfoContent.textContent).toContain("Turning Your Business into an Enduring Great Company");
        expect(bookInfoContent.textContent).toContain("By Jim Collins and Bill Lazier");
        expect(bookInfoContent.textContent).toContain("13-minute read");
    });

    test('should add book to library and move to finished', () => {
        render(<BookInfo />);
        const addToLibraryButton = screen.getByText('Add to Library');
        expect(addToLibraryButton).toBeVisible();
        fireEvent.click(addToLibraryButton);
        expect(addToLibraryButton).not.toBeVisible();
        const readNowButton = screen.getByText('Read now');
        expect(readNowButton).toBeVisible();
        fireEvent.click(readNowButton);
        const finishedButton = screen.getByText('Finished Reading');
        expect(finishedButton).toBeVisible();
        fireEvent.click(finishedButton);
        expect(finishedButton).toBeVisible();
        expect(readNowButton).not.toBeVisible();

    })

    test('checking the tabs', () => {
        render(<BookInfo />);
        const tabs = screen.getAllByRole("tab");
        expect(tabs.length).toBe(3);
        expect(tabs[0].textContent).toBe("Synopsis");
        expect(tabs[1].textContent).toBe("Who is it for?");
        expect(tabs[2].textContent).toBe("About the author");
        const tabPanel = screen.getAllByRole("tabpanel");
        expect(tabPanel.length).toBe(1);
        fireEvent.click(tabs[0]);
        const tabPanel1 = screen.getByRole("tabpanel");
        expect(tabPanel1.textContent).toContain("Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook");
        fireEvent.click(tabs[1]);
        const tabPanel2 = screen.getByRole("tabpanel");
        expect(tabPanel2.textContent).toContain("Office drones who want to break out of their nine-to-five");
        fireEvent.click(tabs[2]);
        const tabPanel3 = screen.getByRole("tabpanel");
        expect(tabPanel3.textContent).toContain("Bill Lazier was professor of business at Stanford");
        
    })

    test('checking the more book cards', () => {
        render(<BookInfo />);
        const bookCards= screen.getAllByTestId(/more-book-card/i);
        expect(bookCards.length).toBe(3);
        const bookImages = screen.getAllByTestId(/book-image/i);
        expect(bookImages.length).toBe(4);
        const addToLibraryButtons = screen.getAllByText("+ Add to Library");
        expect(addToLibraryButtons.length).toBe(2);
        const progressBar = screen.getAllByTestId(/progress-bar/i);
        expect(progressBar.length).toBe(1);
    })
});

export {}