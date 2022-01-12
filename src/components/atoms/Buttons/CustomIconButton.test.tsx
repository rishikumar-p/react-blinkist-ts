import React from 'react';
import DefaultButton from './DefaultButton';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('App', () => {
    test('checking the buttom label', () => {
        render(<DefaultButton label="Im Button"  variant="outlined" testId="default-button"/>);
        const button = screen.getByTestId('default-button');
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
            testId="icon-button"
        />);
        expect(screen.getByTestId("default-button")).toBeTruthy();
    });
});