function Cart(props) {
  return (
    <section>
      <a href='#'>Cart</a>
      <p data-testid='amount'>{props.amount}</p>
    </section>
  );
}

export default Cart;
