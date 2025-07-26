# 🎮 ValoSkinVault

**ValoSkinVault** is a web application that allows users to browse, filter, and sort all available weapon skins, while also estimating the total monetary value of their collection. With a focus on design and usability, this app gives users a fun and informative way to explore their favorite cosmetics in the game.
Project by: Daniel

---

## 📦 Features

-  View every available skin from the Valorant API.
-  **Filtering & Sorting:**
  - By **Tier**
  - By **Skin Line**
  - By **Weapon Type**
  - By **Release Year**
- **Cart System:**
  - Add selected skins to a cart to calculate collection value.
  - View total cost in VP (Valorant Points).
  - Automatically convert VP cost into CAD (estimate based on conversion from VP to CAD).

---

## 🛠️ Tech Stack

- **Frontend:**
  - HTML, CSS, JavaScript
  - [TailwindCSS](https://tailwindcss.com/)
  - 
- **API:**
  - [Valorant API](https://dash.valorant-api.com/endpoints/weapons)
  - Currency conversion API (for USD ➡️ CAD)
- **Icons/UI:**
  - FontAwesome or Lucide for icons

---

## 🧭 Layout Overview

### 🔝 Top Bar (Header)
- **Center:** App name – *ValoSkinVault*
- **Menu:**
  - Sort by name, tier, bundle, price, etc.
  - Filter options (Weapon Type, Tier, Release Year)
  - Search bar for fast navigation

### 🛒 Cart (Top-Right Corner)
- List of added skins with:
  - Skin name
  - Weapon type
  - VP cost
  - Remove option
- **Total VP cost**
- **Converted CAD value**

### 🧱 Main Display Area
- **Grid layout** of skins:
  - Skin image
  - Name, Tier, Weapon Type
  - Estimated VP cost
  - Add to Cart button

---

## 🔗 APIs Used
- 🎯 **Valorant API:** [Weapons Endpoint](https://dash.valorant-api.com/endpoints/weapons)
