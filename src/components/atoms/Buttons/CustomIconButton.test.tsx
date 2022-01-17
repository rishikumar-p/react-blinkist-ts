import React from 'react';
import CustomIconButton from './CustomIconButton';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchIcon from '@mui/icons-material/Search';
import '@testing-library/jest-dom';


describe('Custom icon button', () => {
    const handleClick = () => {};
    it('Checking the click', () => {
        render(<CustomIconButton
            icon={<SearchIcon/>}
            onClick={handleClick}
            testId="icon-button"
        />);
        const defaultButton = screen.getByTestId("icon-button");
        expect(defaultButton).toBeTruthy();
        fireEvent.click(defaultButton);
    });
});