import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Expense Modifications", () => {
    test("Add Expense", () => {
        render (<App />);
        const name = screen.getByLabelText("Name");
        const cost = screen.getByLabelText("Cost");
        const saveButton = screen.getByText("Save");

        fireEvent.change(name, { target: { value: "Test Expense" } });
        fireEvent.change(cost, { target: { value: 100 } });
        fireEvent.click(saveButton);

        expect(screen.getByText("Test Expense")).toBeInTheDocument();
        expect(screen.getByText("$100")).toBeInTheDocument();
        expect(screen.getByText("Remaining: $900")).toBeInTheDocument();
        expect(screen.getByText("Spent so far: $100")).toBeInTheDocument();
        expect(screen.getByText("Total Budget: $1000")).toBeInTheDocument();


    });

});
