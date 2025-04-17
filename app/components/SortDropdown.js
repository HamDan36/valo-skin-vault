import React from "react";

function SortDropdown() {
  return (
    <select className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-700">
      <option value="name">Sort by Name</option>
      <option value="price">Sort by VP</option>
      <option value="tier">Sort by Tier</option>
      <option value="bundle">Sort by Bundle</option>
    </select>
  );
}

export default SortDropdown;
