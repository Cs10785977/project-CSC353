import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Handles the search functionality and user input, displays suggested products when typing 
function SearchBar({ searchTerm, setSearchTerm, products }) {

  //Temp input value before search is submitted
  const [inputValue, setInputValue] = useState(searchTerm);

  //Filters Search
  const suggestions = inputValue
    ? products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    : [];

  const navigate = useNavigate();

  const handleSearch = () => {
    const foundProduct = products.find((product) =>
      product.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (foundProduct) {
      setInputValue('');
      setSearchTerm('');
      navigate(`/product/${foundProduct.id}`);
    }
  };

  return (
    <div className="position-relative">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search products"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />

        <button
          className="btn btn-warning"
          onClick={handleSearch}
        >
          🔍
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className="position-absolute bg-white border w-100 shadow-sm"
          style={{ zIndex: 1000 }}
        >
          {suggestions.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="p-2 suggestion-item"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setInputValue('');
                setSearchTerm('');
                navigate(`/product/${product.id}`);
              }}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

