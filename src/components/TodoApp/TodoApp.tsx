import React, { FC, useMemo, useState } from 'react';
import { Empty, Input } from 'antd';
import TodoItem from '../TodoItem/TodoItem';
import Footer from '../Footer/Footer';
import cls from './TodoApp.module.scss';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Completed = 'all' | 'active' | 'completed'

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Completed>('all');
  const [inputValue, setInputValue] = useState('');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const todoList = useMemo(() => {
    const filteredTodos = todos.filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });

    if (!filteredTodos.length) {
      return <Empty description="No tasks available" className={cls.empty} />;
    }

    const toggleTodo = (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    return filteredTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
      />
    ))
  }, [filter, todos])

  return (
    <div className={cls.todoApp}>
      <h1 className={cls.title}>todos</h1>
      <Input
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />

      <div className={cls.todoList}>
          {todoList}
      </div>

      <Footer
        count={todos.filter((todo) => !todo.completed).length}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoApp;
