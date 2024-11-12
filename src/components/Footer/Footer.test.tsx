import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

test('отображает количество активных задач', () => {
  render(<Footer count={2} filter="all" setFilter={() => {}} clearCompleted={() => {}} />);
  expect(screen.getByText('2 items left')).toBeInTheDocument();
});

test('смена фильтров при нажатии', () => {
  const setFilter = jest.fn();
  render(<Footer count={2} filter="all" setFilter={setFilter} clearCompleted={() => {}} />);
  fireEvent.click(screen.getByText('Active'));
  expect(setFilter).toHaveBeenCalledWith('active');
});
