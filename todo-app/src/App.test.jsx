import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

import App from './App';
import { afterAll } from 'vitest';

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json([
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
    ]);
  })
);

// Innan alla tester körs så starta och lyssna på servern
beforeAll(() => {
  server.listen();
});

// Efter alla tester körts så stäng ner servern
afterAll(() => {
  server.close();
});

describe('App', () => {
  it('should render a list of todos', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('Inga todos')).not.toBeInTheDocument();
    });

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBeGreaterThan(0);
  });

  it('should add a todo', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('Inga todos')).not.toBeInTheDocument();
    });

    const todoItemsBefore = screen.getAllByRole('listitem');

    const todoInput = screen.getByRole('textbox');
    fireEvent.change(todoInput, {
      target: { value: 'Testa' },
    });

    const todoButton = screen.getByRole('button');
    fireEvent.click(todoButton);

    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(
      todoItemsBefore.length
    );
  });
});
