import React, { useState } from 'react';
import searchicon from "../assets/searchicon.png"


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-center mt-4 relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-6 flex  items-center pointer-events-none">
      <img src={searchicon} alt="Search Icon" className="h-4 w-4" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search meals..."
        className=" w-full max-w-md pl-12 px-4 py-2 border mr-10  border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default SearchBar;
