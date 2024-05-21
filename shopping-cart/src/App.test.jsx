import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(async () => {
    render(<App />);

    await waitFor(() => {
      const productItems = screen.getAllByText('Add to cart');
    });
  });

  it('should render a list of products', async () => {
    await waitFor(() => {
      const productItems = screen.getAllByText('Add to cart');
      expect(productItems.length).toBeGreaterThan(0);
    });
  });

  it('should filter products when searching', async () => {
    const filterInput = screen.getByRole('textbox');
    fireEvent.keyUp(filterInput, {
      target: { value: 'iPhone' },
    });

    await waitFor(() => {
      const filteredItems = screen.getAllByText('iPhone', { exact: false });
      const productItems = screen.getAllByText('Add to cart');
      expect(productItems.length).toEqual(filteredItems.length);
    });
  });

  it('should restore products when removed search', async () => {
    const filterInput = screen.getByRole('textbox');
    fireEvent.keyUp(filterInput, {
      target: { value: 'iPhone' },
    });

    fireEvent.keyUp(filterInput, {
      target: { value: '' },
    });

    await waitFor(() => {
      const filteredItems = screen.getAllByText('iPhone', { exact: false });
      const productItems = screen.getAllByText('Add to cart');
      expect(productItems.length).toBeGreaterThan(filteredItems.length);
    });
  });

  it('should be able to add a product to cart and the amount updates', async () => {
    const addToCartButton = screen.getAllByRole('button');
    fireEvent.click(addToCartButton[0]);

    const amountElem = screen.getByTestId('amount');
    expect(amountElem.textContent).toBe('1');
  });
});
