function Product(props) {
  //console.log(props);
  function handleClick() {
    props.setAmount(props.amount + 1);
  }

  return (
    <article data-testid='product-item'>
      <img src={props.image} alt='' />
      <h2>{props.title}</h2>
      <h3>{props.brand}</h3>
      <p>{props.description}</p>
      <button onClick={handleClick}>Add to cart</button>
    </article>
  );
}

export default Product;
