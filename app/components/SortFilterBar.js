import React from "react";

const SortFilterBar = ({ onSortChange, onFilterChange, filters, sort }) => {
  return (
    <div className="z-30 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm py-2 px-4">
      <div className="flex flex-wrap gap-4 items-center justify-between max-w-6xl mx-auto">
        {/* sort */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Sort by:</label>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-2 py-1 rounded border dark:bg-zinc-800 dark:text-white text-sm"
          >
            <option value="name">Name/Bundle</option>
            <option value="tier">Tier/Cost</option>
          </select>
        </div>

        {/* filters */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Weapon:</label>
          <select
            value={filters.weaponType}
            onChange={(e) => onFilterChange("weaponType", e.target.value)}
            className="px-2 py-1 rounded border dark:bg-zinc-800 dark:text-white text-sm"
          >
            <option value="">All</option>
            <option value="Rifle">Rifle</option>
            <option value="Sniper">Sniper</option>
            <option value="Shotgun">Shotgun</option>
            <option value="SubMachineGuns">SMG</option>
            <option value="LMG">LMG</option>
            <option value="Pistol">Pistol</option>
            <option value="Melee">Melee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortFilterBar;
