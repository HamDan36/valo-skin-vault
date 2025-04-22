import React from "react";

function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search skins..."
      className="sticky top-0 px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-700"
    />
  );
}

export default SearchBar;
