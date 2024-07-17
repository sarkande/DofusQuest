import { render, screen } from '@testing-library/react';
import ApplicationList from './ApplicationList';

describe('ApplicationList Component', () => {
  test('renders the list title', () => {
    render(<ApplicationList />);
    const titleElement = screen.getByText('Application List');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all application items', () => {
    render(<ApplicationList />);
    const applicationItems = screen.getAllByRole('img');
    expect(applicationItems).toHaveLength(7);
  });

  test('renders the correct titles for all application items', () => {
    render(<ApplicationList />);
    const titles = ['Dofus Quest', 'Better Naio', 'Craft', 'Almanax', 'Tuto', 'Notes', 'Portal'];

    titles.forEach(title => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
