import React, { FC } from 'react';
import { Checkbox } from 'antd';
import classNames from 'classnames';
import { Todo } from '../TodoApp/TodoApp';
import cls from './Todoitem.module.scss';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className={cls.todoItem}>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={classNames(cls.text, { [cls.completed]: todo.completed })}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
