import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
