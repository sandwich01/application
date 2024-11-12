import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import cls from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={cls.App}>
      <TodoApp />
    </div>
  );
};

export default App;