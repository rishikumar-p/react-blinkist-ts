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
        const menu = screen.getByTestId("account-dropdown-menu");
        expect(menu).toBeVisible();
        fireEvent.click(accountDropDownButton);
    });

    test('Should display a drop down with items', () => {
        render(<AccountDropDown/>);
        const accountDropDownButton = screen.getByRole("button");
        expect(accountDropDownButton).toBeVisible();
        fireEvent.click(accountDropDownButton);
        const menuitems = screen.getAllByRole("menuitem");
        expect(menuitems.length).toBe(5);
        expect(menuitems[0].textContent).toContain("Invite Friends");
        expect(menuitems[1].textContent).toContain("Wishlist");
        expect(menuitems[2].textContent).toContain("Settings");
        expect(menuitems[3].textContent).toContain("Help");
        expect(menuitems[4].textContent).toContain("Logout");
        fireEvent.click(accountDropDownButton);
    });

    test('On clicking the arrow icon should change',() => {
        render(<AccountDropDown/>);
        const accountDropDownButton = screen.getByRole("button");
        let downicon = screen.queryByTestId("KeyboardArrowDownIcon");
        let upicon = screen.queryByTestId("KeyboardArrowUpIcon");
        expect(downicon).toBeTruthy();
        expect(upicon).toBeFalsy();
        fireEvent.click(accountDropDownButton);
        downicon = screen.queryByTestId("KeyboardArrowDownIcon");
        upicon = screen.queryByTestId("KeyboardArrowUpIcon");
        expect(downicon).toBeFalsy();
        expect(upicon).toBeTruthy();
        fireEvent.click(accountDropDownButton);
    })

});