'use client'
import React, { useEffect, useState } from "react";

// TODO: Import your components one by one as you build them
import Header from '../components/Header';
// import FilterPanel from '../components/FilterPanel';
import SkinCard from '../components/SkinCard';
// import Cart from '../components/Cart';
// import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
    const [skins, setSkins] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchSkins = async () => {
        try {
          const res = await fetch('https://valorant-api.com/v1/weapons');
          const data = await res.json();
  
          const allSkins = data.data.flatMap(weapon => weapon.skins);
  
          // Optional: filter out non-skin variants (like default skins with no image)
          const filteredSkins = allSkins.filter(
            skin => skin.displayIcon && !skin.displayName.includes('Standard')
          );
  
          setSkins(filteredSkins);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching skins:', error);
        }
      };
  
      fetchSkins();
    }, []);
  
    return (
      <>
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {loading ? (
            <p>Loading skins...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skins.map((skin) => (
                <SkinCard key={skin.uuid} skin={skin} />
              ))}
            </div>
          )}
        </main>
      </>
    );
  }