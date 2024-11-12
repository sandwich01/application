import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TodoApp component', () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});
