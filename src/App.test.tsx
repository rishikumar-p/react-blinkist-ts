import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
jest.unmock('axios');

describe('App', () => {
  test('Should display the app', () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toBeTruthy();
    expect(app).toBeVisible();
  });
});