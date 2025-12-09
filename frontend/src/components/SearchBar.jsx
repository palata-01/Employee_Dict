import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleNameChange = (e) => {
    const name = e.target.value;
    onSearch({ name });
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    onSearch({ department });
  };

  return (
    <div className="mb-6 flex gap-4 flex-col md:flex-row">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={handleNameChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search by department..."
          onChange={handleDepartmentChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
