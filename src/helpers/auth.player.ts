import axios from "axios";

export const authPlayer = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `https://anzu-backend-kts.onrender.com/api/users/auth`,

      {
        email,
        password,
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
