import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product, cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="card mb-4 p-3 h-100 product-card">
      <div>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid mb-3"
          />
        </Link>

        <Link
          to={`/product/${product.id}`}
          className="text-dark text-decoration-none"
        >
          <h4 className="mb-2">{product.name}</h4>
        </Link>

        <p className="text-muted">${product.price}</p>

        {!cartItem ? (
          <button
            className="btn btn-warning btn-sm mt-2 w-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="d-flex align-items-center mt-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() =>
                cartItem.quantity === 1
                  ? removeFromCart(product.id)
                  : decreaseQuantity(product.id)
              }
            >
              {cartItem.quantity === 1 ? '🗑️' : '-'}
            </button>

            <span className="mx-3 fw-bold">{cartItem.quantity}</span>

            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;