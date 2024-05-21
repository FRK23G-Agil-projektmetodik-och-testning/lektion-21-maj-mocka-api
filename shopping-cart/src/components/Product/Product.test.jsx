import { render, screen, fireEvent } from '@testing-library/react';

import Product from './Product';

describe('Product', () => {
  it('should display correct product information', async () => {
    render(
      <Product
        title='iPhone 9'
        brand='Apple'
        description='An apple mobile which is nothing like apple'
        image='https://cdn.dummyjson.com/product-images/1/1.jpg'
        key='1'
        setAmount={() => {}}
        amount={0}
      />
    );

    const imgElem = screen.getByRole('presentation');
    const headingElems = screen.getAllByRole('heading');
    const descElem = screen.getByRole('paragraph');
    expect(imgElem.src).toBe(
      'https://cdn.dummyjson.com/product-images/1/1.jpg'
    );
    expect(headingElems[0].textContent).toBe('iPhone 9');
    expect(headingElems[1].textContent).toBe('Apple');
    expect(descElem.textContent).toBe(
      'An apple mobile which is nothing like apple'
    );
  });
});
