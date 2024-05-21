import { http, HttpResponse } from 'msw';

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json(todos);
  }),
  http.post('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json({ success: true, message: 'Todo added' });
  }),
];
