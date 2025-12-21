const API_BASE = "https://valorant-api.com/v1";

//gets all skins in one go from API
export async function getAllSkins() {
  try {
    const response = await fetch(`${API_BASE}/weapons/skins`);

    if (!response.ok) { // worked if codes are 200-299, failed if 404, 500
      throw new Error(`Error fetching skins from API: ${response.statusText}`);
    }

    const data = await response.json(); // return the data only not full response
    return data.data;
  } catch (error) {
    console.error("Failed to fetch skins from API service:", error);
    throw error;
  }
}

