"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SkinCard from "./components/SkinCard";
import SortFilterBar from "./components/SortFilterBar";
import { getAllSkins } from "./services/valorantAPI";
import tierNames from "./utils/tierNames";
import tierCosts from "./utils/tierCosts";
import WelcomeCard from "./components/WelcomeCard";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ weaponType: "" });
  const [sort, setSort] = useState("name");

  const [searchTerm, setSearchTerm] = useState("");

  // update the type of sorting
  const handleSortChange = (value) => {
    setSort(value); 
  };

  // update filters state, adds more filters if needed from props
  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  // second array of skins for filtering
  const getVisibleSkins = () => {
    let filtered = [...skins];  

    // filter weapon type
    if (filters.weaponType) {
      filtered = filtered.filter((skin) => {
        const category = skin?.assetPath?.toLowerCase();
        return category?.includes(filters.weaponType.toLowerCase());
      });
    }

    // search
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((skin) =>
        skin.displayName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // sorting
    if (sort === "name") {
      filtered.sort((a, b) => a.displayName.localeCompare(b.displayName));
    } else if (sort === "tier") {
      //custom order
      const tierOrder = ["Select", "Deluxe", "Premium", "Ultra", "Exclusive"];
      // sort skins based on custom order using index
      filtered.sort(
        (a, b) => tierOrder.indexOf(a.tierName) - tierOrder.indexOf(b.tierName)
      );
    } else if (sort === "cost") {
      filtered.sort((a, b) => a.tierCost - b.tierCost);
    }

    console.log("Filtered Skins:", filtered);

    return filtered;
  };

  //use hook to fetch skins 
  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const allSkins = await getAllSkins(); // from valorantAPI

        //filter out default skin and skins without visual assets
        const enriched = allSkins
          .filter((skin) => {
            const isStandard =
              skin.displayName.toLowerCase().includes("standard") ||
              !skin.contentTierUuid; // no tier = default skin

            const hasVisual = skin.displayIcon || skin.image;
            //exlcude skins without visual assets

            return !isStandard && hasVisual;
          })
          //assign tier names and costs
          .map((skin) => {
            const tierName = tierNames[skin.contentTierUuid] || "Select"; // Default to "Select" if not found
            const tierCost = tierCosts[tierName] || 0; // Default to 0 if not found

            return {
              ...skin,
              image: skin.displayIcon || skin.image || "",
              tierName,
              tierCost,
            };
          });

        // save processed skins to skins array(state)
        setSkins(enriched);
      } catch (error) {
        console.error("Error fetching skins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkins();
  }, []); // only run once

  return (
    <>
      {showWelcome && <WelcomeCard onClose={() => setShowWelcome(false)} />}
      <div className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-700 shadow-md">
        {/* header component, pass search state down */}
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
        {/*pass sorting and filter controls */}
        <SortFilterBar
          sort={sort}
          filters={filters}
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
        />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <p>Loading skins...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* get filtered/sorted skins and renders one skincard component for each */}
            {getVisibleSkins().map((skin) => (
              <SkinCard key={skin.uuid} skin={skin} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
