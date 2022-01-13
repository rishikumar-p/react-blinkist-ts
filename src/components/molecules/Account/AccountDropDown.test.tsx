import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import AccountDropDown from './AccountDropDown';


describe('AccountDropDown', () => {
    test('AccountDropDown Button Should be Visible', () => {
        render(<AccountDropDown/>);
        const accountDropDownButton = screen.getByRole("button");
        expect(accountDropDownButton).toBeVisible();
    });

    test('On clicking on account button, dropdown menu should be open', () => {
        render(<AccountDropDown/>);
        const accountDropDownButton = screen.getByRole("button");
        expect(accountDropDownButton).toBeVisible();
        fireEvent.click(accountDropDownButton);
        const menu = screen.getByRole("menu");
        expect(menu).toBeVisible();
    });

});