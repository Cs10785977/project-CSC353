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
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>

          <h3 className="text-success mb-3">
            ${product.price}
          </h3>

          <p>{product.description}</p>

          <p
            className={
              product.stock === "Out of Stock"
                ? "text-danger fw-bold"
                : product.stock === "Limited Stock"
                  ? "fw-bold"
                  : "text-success fw-bold"
            }
            style={
              product.stock === "Limited Stock"
                ? { color: "#ff8800" }
                : {}
            }
          >
            {product.stock}
          </p>

          {product.stock === "Out of Stock" ? (
            <button className="btn btn-secondary btn-lg mt-3" disabled>
              Out of Stock
            </button>
          ) : (
            <button
              className="btn btn-warning btn-lg mt-3"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;