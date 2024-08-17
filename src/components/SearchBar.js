import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
    navigate('/search');
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for products..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
