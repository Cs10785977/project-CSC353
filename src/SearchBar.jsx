import React, { useState } from 'react';

function SearchBar({ searchTerm, setSearchTerm, products }) {
  const [inputValue, setInputValue] = useState(searchTerm);

  const suggestions = inputValue
    ? products.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    setSearchTerm(inputValue);
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
                setInputValue(product.name);
                setSearchTerm(product.name);
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

