const API_URL_LIST = "https://wedev-api.sky.pro/api/leaderboard";
const API_URL_ADD_WINNER = "https://wedev-api.sky.pro/api/leaderboard";

export async function getList() {
  const response = await fetch(API_URL_LIST, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function createLeaderboard({ name, time }) {
  const response = await fetch(API_URL_ADD_WINNER, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}
