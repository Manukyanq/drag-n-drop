export const STATUSES = {
  TO_DO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
};

export const TASKS = [
  {
    title: 'first task',
    description: 'Do first task Do first task Do first task Do first task',
    status: STATUSES.TO_DO,
    user: 2,
    id: '1',
  },
  {
    title: 'second task',
    description: 'Do second task Do second task Do second task Do second task',
    status: STATUSES.TO_DO,
    user: 1,
    id: '2',
  },
  {
    title: 'third task',
    description:
      'Do third task Do third task Do third task Do third task Do third task Do third task',
    status: STATUSES.TO_DO,
    id: '3',
    user: 3,
  },
];

export const USERS = [
  {
    id: 1,
    name: 'Kevin De Bruyne',
  },
  {
    id: 2,
    name: 'Mohammed Salah',
  },
  {
    id: 3,
    name: 'Leo Messi',
  },
];
