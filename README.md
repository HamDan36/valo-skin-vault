# 🎮 ValoSkinVault

**ValoSkinVault** is a sleek web application that allows Valorant players to browse, filter, and sort all available weapon skins, while also estimating the total monetary value of their collection. With a focus on design and usability, this app gives users a fun and informative way to explore their favorite cosmetics in the game.

## 👥 Group
**Project by:** Daniel

## 🌐 Live Preview
*Coming soon...*

---

## 📦 Features

- 🧱 **Display All Skins:** View every available skin from the Valorant API.
- 🔍 **Filtering & Sorting:**
  - By **Tier**
  - By **Skin Line**
  - By **Weapon Type**
  - By **Release Year**
- 💰 **Cart System:**
  - Add selected skins to a cart to simulate collection value.
  - View total **VP cost**.
  - Automatically convert VP cost into **CAD (Canadian Dollars)** using real-time exchange rates.
- 🎥 **Video Preview Support:** *(Time and API permitting)*
- 🌑 **Dark Mode:** Smooth user experience with a toggleable dark theme.

---

## 🛠️ Tech Stack

- **Frontend:**
  - HTML, CSS, JavaScript
  - [TailwindCSS](https://tailwindcss.com/) (recommended for fast UI dev)
  - Optional: React or Vue (depending on implementation)
- **API:**
  - [Valorant API](https://dash.valorant-api.com/endpoints/weapons)
  - Currency conversion API (for USD ➡️ CAD)
- **Icons/UI:**
  - FontAwesome or Lucide for icons

---

## 🧭 Layout Overview

### 🔝 Top Bar (Header)
- **Center:** App name – *ValoSkinVault*
- **Controls:**
  - Sort by name, tier, bundle, price, etc.
  - Filter options (Weapon Type, Tier, Release Year)
  - Search bar for fast navigation

### 🛒 Cart (Top-Right Corner)
- Clickable **cart icon** showing:
  - List of added skins with:
    - Skin name
    - Weapon type
    - VP cost
    - Remove option
  - **Total VP cost**
  - **Converted CAD value**

### 🧱 Main Display Area
- **Card/Grid layout** of skins:
  - Skin image
  - Name, Tier, Weapon Type
  - Estimated VP cost
  - Add to Cart button
  - Optional: Bundle tag, release info

---

## 📈Potential Future Enhancements
- Skin **video previews** using available API resources
- User login and profile tracking (account-based skin inventory)
- Responsive design for mobile devices
- More advanced filtering (e.g., by battle pass, event skins)

---

## 🔗 APIs Used
- 🎯 **Valorant API:** [Weapons Endpoint](https://dash.valorant-api.com/endpoints/weapons)
- 💱 **Currency Conversion API:** (to convert USD ➡️ CAD for VP pricing)

---

## 📸 Screenshots
*Coming soon: UI previews of the grid layout, cart dropdown, and dark mode toggle.*

---

## ⚙️ Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/valoskinvault.git
   cd valoskinvault
