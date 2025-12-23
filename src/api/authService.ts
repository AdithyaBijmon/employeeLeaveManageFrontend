import api from "./commonAPI";

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  try {
    const res = await api.post("/api/users/login", data);
    return res.data;
  } catch (error: any) {
    throw error; 
  }
};

