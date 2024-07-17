import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  test('renders 404 error message', () => {
    render(
      <MemoryRouter initialEntries={['/some/non-existent-route']}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
  });

  test('displays attempted URL', () => {
    const testRoute = '/some/non-existent-route';

    render(
      <MemoryRouter initialEntries={[testRoute]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText((content, element) => 
      element?.tagName.toLowerCase() === 'code' && content.includes(testRoute)
    )).toBeInTheDocument();
  });
});
