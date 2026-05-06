import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import SideCart from './SideCart';

// Main App componenent 
function App() {
  //Stores all products from backend
  const [products, setProducts] = useState([]);

  //Stores what the user is entering
  const [searchTerm, setSearchTerm] = useState('');

  //Stores cart items
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);

  const API_URL = 'http://localhost:5001/products';
  
  //Fetch products from backend 
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  //Save cart on changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  //Adds product to cart or increase quanity
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

    setIsSideCartOpen(true);
  };
  
  //Increases the quanity of items in the cart
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  
  //decreases the quanity of items in the cart
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  
  //Removes item completely from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-background">
      <NavBar 
        cartCount={totalItems} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        products={products}
      />
      
      
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              cart={cart}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

      </Routes>

      <SideCart
          cart={cart}
          isOpen={isSideCartOpen}
          closeSideCart={() => setIsSideCartOpen(false)}
        />
    </div>
  );
}

export default App;