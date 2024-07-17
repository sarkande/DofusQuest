import React from 'react';
import { render, screen } from '@testing-library/react';
import Hub from './Hub';

describe('Hub Component', () => {
  test('renders the Hub title', () => {
    render(<Hub />);
    const titleElement = screen.getByText('Hub');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the ApplicationList component', () => {
    render(<Hub />);
    const applicationListElement = screen.getByText('Application List');
    expect(applicationListElement).toBeInTheDocument();
  });

  test('renders all application items in the ApplicationList', () => {
    render(<Hub />);
    const applicationItems = screen.getAllByRole('img');
    expect(applicationItems).toHaveLength(7); // Assuming there are 7 items in the list
  });
});
