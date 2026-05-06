import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

// Navigation bar that includes links to other pages and the search bar. 
function NavBar({ cartCount, searchTerm, setSearchTerm, products }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">

        <Link to="/" className="navbar-brand mb-0 h1">
          Welcome to Amazoooon
        </Link>

        <div className="d-flex align-items-center w-100">

          <Link to="/" className="me-3 text-white text-decoration-none">
            Home
          </Link>

          <div className="flex-grow-1 mx-3">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              products={products}
            />
          </div>

          <Link to="/cart" className="text-white text-decoration-none">
            Cart ({cartCount})
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default NavBar;