import React from "react";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import FilterPanel from "./FilterPanel";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">ValoSkinVault</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <SearchBar />
        <SortDropdown />
        <FilterPanel />
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
