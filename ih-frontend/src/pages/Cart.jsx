function Cart({ cartCount }) {
  return (
    <section className="cart-section">
      <div className="cart-card">
        <h1>Your Cart</h1>
        <p>This is a placeholder cart page.</p>
        <p className="cart-count">Items in cart: {cartCount}</p>
      </div>
    </section>
  )
}

export default Cart;
