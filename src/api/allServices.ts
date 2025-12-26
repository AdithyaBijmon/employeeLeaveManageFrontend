import api from "./commonAPI";

interface LoginData {
  email: string;
  password: string;
}

const token = sessionStorage.getItem('token')
const authHeader = `Bearer ${token}`

// login api
export const loginUser = async (data: LoginData) => {
  try {
    const res = await api.post("/api/users/login", data);
    return res.data;
  } catch (error: any) {
    throw error;
  }
};


// apply for leave - add leave
export const applyLeaveAPI = async (data: any) => {
  const res = await api.post('/apply-leave', data, { headers: { Authorization: authHeader } })
  return res.data
}

// get all leaves api
export const getAllLeavesAPI = async () => {
  const res = await api.get('/all-leaves', { headers: { Authorization: authHeader } })
  return res.data
}

// cancel leave request
export const cancelLeaveAPI = async (id:number) => {
  const res = await api.delete(`/leave/${id}/cancel`, { headers: { Authorization: authHeader } })
  return res.data
}
