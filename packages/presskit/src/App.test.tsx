import React from 'react';
import { render } from '@testing-library/react';
import App from './pages/Dashboard';

test('renders learn react link', () => {
  const { container } = render(<App />);
  // const linkElement = getByText(/Dashboard/i);
  // expect(linkElement).toBeInTheDocument();

  expect(container.firstChild).not.toBeEmpty();
});
