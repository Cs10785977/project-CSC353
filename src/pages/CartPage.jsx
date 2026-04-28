import React from 'react';
import ShoppingCart from '../ShoppingCart';

function CartPage({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div className="container mt-3">
      <ShoppingCart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default CartPage;