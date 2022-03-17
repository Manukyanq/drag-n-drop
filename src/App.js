import React from 'react';
import { Ticket } from './components/Ticket';
import { Column } from './components/Column';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TASKS, USERS, STATUSES } from './data/mockData';
import Box from '@mui/material/Box';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useLocalStorage('kanban-tasks', TASKS);

  const onDragStart = e => {
    const taskIndex = tasks.findIndex(task => task.id === e.currentTarget.id);
    //using setTimeout is hack, to make original card hide during dragging
    setTimeout(
      () =>
        //immer js is a cool solution for this kind of state manipulations
        setTasks([
          ...tasks.slice(0, taskIndex),
          { ...tasks[taskIndex], isHidden: true },
          ...tasks.slice(taskIndex + 1, tasks.length),
        ]),
      1
    );
    e.dataTransfer.setData('targetId', e.currentTarget.id);
  };

  const onTicketDrop = (e, status) => {
    let taskId = e.dataTransfer.getData('targetId');
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    setTasks([
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], status, isHidden: false },
      ...tasks.slice(taskIndex + 1, tasks.length),
    ]);
  };

  return (
    <Box display='flex' sx={{ gridGap: 16 }} mt={2}>
      {Object.values(STATUSES).map(status => (
        <Column
          key={status}
          title={status}
          onDrop={e => onTicketDrop(e, status)}
        >
          {tasks
            .filter(t => t.status === status)
            .map(task => (
              <Ticket
                key={task.id}
                id={task.id}
                isHidden={task.isHidden}
                title={task.title}
                user={USERS.find(({ id }) => id === task.user)}
                description={task.description}
                onDragStart={onDragStart}
              />
            ))}
        </Column>
      ))}
    </Box>
  );
}
