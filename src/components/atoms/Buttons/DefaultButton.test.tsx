import React from 'react';
import DefaultButton from './DefaultButton';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Default Button', () => {
    test('checking the buttom label', () => {
        render(<DefaultButton label="Im Button"  variant="outlined" testId="default-button"/>);
        const button = screen.getByTestId('default-button');
        expect(button.textContent).toBe('Im Button');
    });

    const handleClick = jest.fn();
    test('Checking the click', () => {
        render(<DefaultButton
            onClick={handleClick}
            label="Button"
            variant="contained"
            testId="default-button"
        />);
        expect(screen.getByTestId("default-button")).toBeTruthy();
    });
});