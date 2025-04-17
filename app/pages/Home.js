import React from "react";

// TODO: Import your components one by one as you build them
// import Header from '../components/Header';
// import FilterPanel from '../components/FilterPanel';
// import SkinCard from '../components/SkinCard';
// import Cart from '../components/Cart';
// import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
      {/* Top Header */}
      <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">ValoSkinVault</h1>
          {/* <DarkModeToggle /> */}
          {/* <Cart /> */}
        </div>
      </header>

      {/* Filter and Sort Panel */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        {/* <FilterPanel /> */}
        {/* <SortDropdown /> */}
        {/* <SearchBar /> */}
      </section>

      {/* Skin Grid */}
      <section className="max-w-6xl mx-auto px-4 py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Example Placeholder */}
        <div className="rounded-lg p-4 border border-dashed border-zinc-400 dark:border-zinc-600 text-center text-sm">
          👋 Start adding your <code>SkinCard</code> components here!
        </div>
      </section>
    </main>
  );
};

export default Home;
