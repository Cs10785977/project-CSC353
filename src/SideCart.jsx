import React from 'react';
import { Link } from 'react-router-dom';
//Sidecart appeard when a user adds an item to cart.
//Shows a preview of the item and the total
function SideCart({ cart, isOpen, closeSideCart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (!isOpen) {
    return null;
  }

  return (
    
    <div className="position-fixed top-0 end-0 bg-white shadow p-3"
      style={{ width: '350px', height: '100vh', zIndex: 9999 }}
    >
      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={closeSideCart}
      >
        X
      </button>


      


      <h4>Added to Cart</h4>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
            <div
                key={item.id}
                className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
                <div>
                    <strong>{item.name}</strong>
                    <p className="mb-0">Qty: {item.quantity}</p>
                </div>

                <div>${item.price}</div>
            </div>
            ))
      )}

      <h5 className="mt-3">Subtotal: ${subtotal.toFixed(2)}</h5>

      <Link to="/cart" className="btn btn-warning w-100 mt-3 fw-bold">
        Go to Cart
      </Link>
    </div>
  );
}

export default SideCart;