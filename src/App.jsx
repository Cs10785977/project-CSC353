import React, { useState, useEffect } from 'react';
import Card from './Card';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const API_URL = 'http://localhost:5001/products';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
    

const filteredProducts = Array.isArray(products)
  ? products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];

const addToCart = (product) => {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const increaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter((item) => item.quantity > 0)
  );
};

const removeFromCart = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};


    return (
    <div className="container mt-3">
       <NavBar cartCount={cart.length} />
      <h1>Welcome to OnlineShopping.com</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Card
              product={product}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>

      <ShoppingCart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
      
    </div>
  );
}

export default App;