import { FC } from 'react';
import { Button } from 'antd';
import cls from './Footer.module.scss';
import { Completed } from '../types';

interface FooterProps {
  count: number;
  filter: Completed;
  setFilter: (filter: Completed) => void;
  clearCompleted: () => void;
}

const Footer: FC<FooterProps> = ({ count, filter, setFilter, clearCompleted }) => {
  return (
    <div className={cls.footer}>
      <span>{count} items left</span>
      <div className={cls.filters}>
        <Button
          type={filter === 'all' ? 'primary' : 'default'}
          className={cls.filterButton}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          type={filter === 'active' ? 'primary' : 'default'}
          className={cls.filterButton}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          type={filter === 'completed' ? 'primary' : 'default'}
          className={cls.filterButton}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>
      <Button onClick={clearCompleted}>Clear completed</Button>
    </div>
  );
};

export default Footer;
