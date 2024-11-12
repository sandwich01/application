import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

test('отображает текст задачи', () => {
  const todo = { id: 1, text: 'Test Task', completed: false };
  render(<TodoItem todo={todo} toggleTodo={() => {}} />);
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});

test('переключает состояние задачи', () => {
  const toggleTodo = jest.fn();
  const todo = { id: 1, text: 'Test Task', completed: false };
  render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(toggleTodo).toHaveBeenCalledWith(1);
});
