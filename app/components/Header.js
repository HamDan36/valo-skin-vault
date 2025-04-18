import React from "react";
import SearchBar from "./SearchBar";
// import SortDropdown from "./SortDropdown";
// import FilterPanel from "./FilterPanel";
// import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          ValoSkinVault
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          <SearchBar />
          {/* <SortDropdown /> */}
          {/* <FilterPanel /> */}
          {/* <DarkModeToggle /> */}
          {/* <Cart /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
