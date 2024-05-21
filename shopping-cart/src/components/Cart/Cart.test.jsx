import { render, screen } from '@testing-library/react';

import Cart from './Cart';

describe('Cart', () => {
  it('should display current amount of products in cart', async () => {
    render(<Cart amount={2} />);

    const amountElem = screen.getByRole('paragraph');
    expect(amountElem.textContent).toBe('2');
  });
});
