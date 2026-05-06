import React from 'react';

//Displays all items in the cart page, allows user to control quanity, calculates total
function ShoppingCart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="row mt-4">
      <div className="col-md-8">
        <div className="card p-3">
          <h3>Shopping Cart</h3>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="d-flex border-bottom py-3">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                  className="me-3"
                />

                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p className="fw-bold">${item.price}</p>

                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-danger btn-sm me-2"
                      onClick={() =>
                        item.quantity === 1
                        ? removeFromCart(item.id)
                        : decreaseQuantity(item.id)
                      }
                    >
                      {item.quantity === 1 ? '🗑️' : '-'}
                    </button>

                    <span className="me-2">Qty: {item.quantity}</span>

                    <button
                      className="btn btn-outline-success btn-sm me-3"
                      onClick={() => increaseQuantity(item.id)}
                    >
                    +
                    </button>

                    

                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Subtotal ({cart.length} items):</h5>
            <h4>${total.toFixed(2)}</h4>

            <button className="btn btn-warning w-100 mt-3">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;