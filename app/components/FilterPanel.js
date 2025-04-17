import React from "react";

function FilterPanel() {
  return (
    <select className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-700">
      <option value="all">Filter by Weapon Type</option>
      <option value="vandal">Vandal</option>
      <option value="phantom">Phantom</option>
      <option value="operator">Operator</option>
    </select>
  );
}

export default FilterPanel;
