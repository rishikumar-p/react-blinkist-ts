import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import EndIconButton from './EndIconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import '@testing-library/jest-dom';


describe('End Icon Button', () => {
    test('checking the button label', () => {
        render(<EndIconButton label="Im Button"  variant="outlined" endIcon={<KeyboardArrowDownOutlinedIcon/>} testId="end-icon-button"/>);
        const button = screen.getByTestId('default-button');
        expect(button.textContent).toBe('Im Button');
    });
});

// describe('checking the button click', () => {
//     const handleClick = jest.fn();
//     it('Checking the click', () => {

//         render(<DefaultButton
//             onClick={handleClick}
//             label="Button"
//             variant="contained"
            
//         />);
//         expect(screen.getByTestId("default-button")).toBeTruthy();
//     });
// });