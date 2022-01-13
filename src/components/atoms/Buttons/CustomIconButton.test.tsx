import React from 'react';
import DefaultButton from './DefaultButton';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('App', () => {
    test('checking the Default Button label', () => {
        render(<DefaultButton label="Im Button"  variant="outlined" testId="default-button"/>);
        const button = screen.getByTestId('default-button');
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button.textContent).toBe('Im Button');
    });
});

describe('checking the button click', () => {
    const handleClick = () => {};
    it('Checking the click', () => {
        render(<DefaultButton
            onClick={handleClick}
            label="Button"
            variant="contained"
            testId="default-button"
        />);
        const defaultButton = screen.getByTestId("default-button");
        expect(defaultButton).toBeTruthy();
        fireEvent.click(defaultButton);
    });
});