import axios from "axios";

export const searchPlayer = async (
  player: string,
  listPlayers: (value: []) => void
) => {
  try {
    const response = await axios.get(
      `https://anzu-backend-kts.onrender.com/users/${player}`
    );
    listPlayers(response.data);
  } catch (error) {
    throw new Error(error as string);
  }
};
