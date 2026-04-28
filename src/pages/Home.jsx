import React from 'react';
import Card from '../Card';

function Home({ products, cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div className="container mt-3">
      <h1>Welcome to OnlineShopping.com</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Card
              product={product}
              cart={cart}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;