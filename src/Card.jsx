import React from 'react';

function Card({ product, addToCart }) {
  return (
    <div className="card mb-3 p-3">
      <div>
        <img
            src={product.image}
            alt={product.name}
            className="img-fluid mb-3"
        />

        <h4 className="mb-2">{product.name}</h4>
        <p className="text-muted">${product.price}</p>

        <button
          className="btn btn-primary btn-sm mt-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;