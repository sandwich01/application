import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

test('создает новую задачу при нажатии Enter', () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('отображает фильтры correctly', () => {
  render(<TodoApp />);
});

test('очищает завершённые задачи', () => {
  render(<TodoApp />);
});
