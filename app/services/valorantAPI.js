const API_BASE = "https://valorant-api.com/v1";

export async function getAllSkins() {
  try {
    const response = await fetch(`${API_BASE}/weapons/skins`);

    if (!response.ok) {
      throw new Error(`Error fetching skins from API: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch skins from API service:", error);
    throw error;
  }
}
