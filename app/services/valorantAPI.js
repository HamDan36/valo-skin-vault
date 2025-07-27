const API_BASE = "https://valorant-api.com/v1";

export async function getAllSkins() {
  const response = await fetch(`${API_BASE}/weapons/skins`);
  const data = await response.json();
  return data.data;
}
