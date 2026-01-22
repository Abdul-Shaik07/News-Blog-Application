import React, { useState } from 'react';

const Navbar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      handleSearch(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">Trendy News</h2>
        <ul>
          <li>All</li>
          <li>Trending</li>
          <li>Latest</li>
        </ul>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search news..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;