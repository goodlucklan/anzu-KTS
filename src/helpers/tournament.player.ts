import axios from "axios";

export const getAllTournaments = async () => {
  try {
    const response = await axios.get(
      `https://anzu-backend-kts.onrender.com/api/tournament/getTournaments`
    );
    return response?.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
