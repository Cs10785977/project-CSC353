import React from 'react';

function NavBar({ cartCount }) {
    return (
  <nav className="navbar navbar-dark bg-dark mb-3">
    <div className="container d-flex justify-content-between">

      <span className="navbar-brand mb-0 h1">Online Store</span>

      <div className="text-white">
        <span className="me-3">Home</span>
        <span className="me-3">Products</span>
        <span>Cart ({cartCount})</span>
      </div>

    </div>
  </nav>
);

}
export default NavBar;