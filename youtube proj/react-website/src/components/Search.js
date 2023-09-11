import React, { useState } from "react";

const Search = ({ data, updateSearchData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
   
    const filteredData = data.filter((item) =>
      item?.ReminderMsg?.toLowerCase().includes(searchQuery)
    );
    updateSearchData(filteredData);
  };

  return (
    <div className="searchdata">
      <input
        type="text"
        placeholder="Search for data..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
