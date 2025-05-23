// //page.js
"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SkinCard from "./components/SkinCard";
import SortFilterBar from "./components/SortFilterBar";
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

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const getVisibleSkins = () => {
    let filtered = [...skins];

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
      const tierOrder = ["Select", "Deluxe", "Premium", "Ultra", "Exclusive"];
      filtered.sort(
        (a, b) => tierOrder.indexOf(a.tierName) - tierOrder.indexOf(b.tierName)
      );
    } else if (sort === "cost") {
      filtered.sort((a, b) => a.tierCost - b.tierCost);
    }

    return filtered;
  };

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const response = await fetch(
          "https://valorant-api.com/v1/weapons/skins"
        );
        const data = await response.json();

        // Filter out skins that are not "Standard" or don't have a contentTierUuid
        const enriched = data.data
          .filter((skin) => {
            const isStandard =
              skin.displayName.toLowerCase().includes("standard") ||
              skin.displayName.toLowerCase().includes("default") ||
              !skin.contentTierUuid; // no tier = likely default skin

            const hasVisual = !!skin.displayIcon || skin.chromas.length > 0;

            return !isStandard && hasVisual;
          })
          .map((skin) => {
            const tierName = tierNames[skin.contentTierUuid] || "Select";
            const tierCost = tierCosts[tierName] || 0;

            return {
              ...skin,
              image: skin.displayIcon || skin.chromas?.[0]?.fullRender || "",
              tierName,
              tierCost,
            };
          });

        setSkins(enriched);
      } catch (error) {
        console.error("Error fetching skins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkins();
  }, []);

  return (
    <>
      {showWelcome && <WelcomeCard onClose={() => setShowWelcome(false)} />}
      <div className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-700 shadow-md">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
            {getVisibleSkins().map((skin) => (
              <SkinCard key={skin.uuid} skin={skin} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
