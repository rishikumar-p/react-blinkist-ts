import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccountDropDown from './AccountDropDown';


describe('AccountDropDown', () => {
    it('AccountDropDown box', () => {
        render(<AccountDropDown/>);
        
    });
});