import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    //console.log(data);
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const productComponents = products.map((product) => {
    return (
      <Product
        title={product.title}
        brand={product.brand}
        description={product.description}
        image={product.images[0]}
        key={product.id}
        setAmount={setAmount}
        amount={amount}
      />
    );
  });

  function filterProducts(event) {
    if (event.target.value === '') getProducts();

    const result = products.filter((product) => {
      if (product.title.includes(event.target.value)) return product;
    });

    setProducts(result);
  }

  return (
    <main>
      <Header amount={amount} />
      <label>Sök: </label>
      <input type='text' onKeyUp={filterProducts} />
      <section>{productComponents}</section>
    </main>
  );
}

export default App;
