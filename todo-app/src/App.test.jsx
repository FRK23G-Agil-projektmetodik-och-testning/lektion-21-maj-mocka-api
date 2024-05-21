import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from './App';

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
