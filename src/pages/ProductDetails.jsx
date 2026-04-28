import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id.toString() === id);

  if (!products || products.length === 0) {
     return <h2 className="container mt-3">Loading product...</h2>;
  }

  if (!product) {
     return <h2 className="container mt-3">Product not found</h2>;
  }

  return (
    <div className="container mt-3">
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-3"
      />

      <h4>${product.price}</h4>

      <p>This is a detailed description of the product.</p>

      <button
        className="btn btn-primary mt-2"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;