import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';

export default function List() {
  const tasks = useSelector((state) => state.tasksReducer.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          name={task.name}
          id={task.id}
          text={task.text}
          checked={task.checked}
        />
      ))}
    </div>
  );
}
