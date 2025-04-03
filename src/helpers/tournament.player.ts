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

export const insertPlayerTournament = async ({
  konamiid,
  name,
  idtournament,
}: any) => {
  console.log("konamiid", konamiid);
  console.log("name", name);
  console.log("idtournament", idtournament);
  try {
    const response = await axios.post(
      `https://anzu-backend-kts.onrender.com/api/tournament/addPlayerInTournament`,
      {
        konamiid,
        name,
        idtournament,
      }
    );
    console.log("response insertPlayerTournament", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
