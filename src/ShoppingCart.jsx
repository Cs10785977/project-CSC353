import React from 'react';

function ShoppingCart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
const total = cart.reduce(
  (sum, item) => sum + item.quantity * (item.price || 9.99),
  0
);
  return (
    <div className="card p-3 mt-4">
      <h3>Shopping Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
            
          <div key={item.id} className="mb-3 border-bottom pb-2">
            <strong>{item.name}</strong>
            <p>Quantity: {item.quantity}</p>

            <button
              className="btn btn-success btn-sm me-2"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>

            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
        {cart.length > 0 && (
            <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
        )}
    </div>
  );
}

export default ShoppingCart;