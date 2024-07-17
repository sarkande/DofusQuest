import { render, screen } from '@testing-library/react';
import ApplicationItem from './ApplicationItem';

describe('ApplicationItem Component', () => {
  test('renders the image with correct src and alt attributes', () => {
    const imageSrc = 'https://via.placeholder.com/150';
    const title = 'Application 1';
    render(<ApplicationItem imageSrc={imageSrc} title={title} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', imageSrc);
    expect(imgElement).toHaveAttribute('alt', title);
  });

  test('renders the title correctly', () => {
    const imageSrc = 'https://via.placeholder.com/150';
    const title = 'Application 1';
    render(<ApplicationItem imageSrc={imageSrc} title={title} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('has the correct container classes', () => {
    const imageSrc = 'https://via.placeholder.com/150';
    const title = 'Application 1';
    const { container } = render(<ApplicationItem imageSrc={imageSrc} title={title} />);

    const applicationItemContainer = container.querySelector('.application-item__container');
    const applicationItemIcon = container.querySelector('.application-item__container--icon');
    const applicationItemTitle = container.querySelector('.application-item__container--title');

    expect(applicationItemContainer).toBeInTheDocument();
    expect(applicationItemIcon).toBeInTheDocument();
    expect(applicationItemTitle).toBeInTheDocument();
  });
});
