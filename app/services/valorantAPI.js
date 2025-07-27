const API_BASE = "https://valorant-api.com/v1";

export async function getAllSkins() {
  try{
    const response = await fetch(`${API_BASE}/weapons/skins`);

    if (!response.ok) {
      throw new Error(`Error fetching skins from API: ${response.message}`);
    }
  }

  catch (error) {
    console.error("Failed to fetch skins:", error);
    throw error;
  } 

  const data = await response.json();
  const allSkins = data.data;

  
}
