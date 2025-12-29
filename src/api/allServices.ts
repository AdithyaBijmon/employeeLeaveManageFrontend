import {api} from "./commonAPI";

interface LoginData {
  email: string;
  password: string;
}

// const token = sessionStorage.getItem('token')
// const authHeader = `Bearer ${token}`

// login api
export const loginUser = async (data: LoginData) => {
  try {
    const res = await api.post("login", data);
    return res.data;
  } catch (error: any) {
    throw error;
  }
};


// apply for leave - add leave
export const applyLeaveAPI = async (data: any) => {
  const res = await api.post('/apply-leave', data)
  return res.data
}

export const getMyLeavesAPI = async()=>{
  const res = await api.get(`/all/my/leaves`)
  return res.data
}



// cancel leave request
export const cancelLeaveAPI = async (id:number) => {
  const res = await api.delete(`/leave/${id}/cancel`)
  return res.data
}

// ----------------- ADMIN ----------------

// add an employee
export const addEmployeeAPI = async(data:any)=>{
  const res = await api.post(`/new-employee`,data)
  return res.data
}

// get all employees
export const getEmployees = async()=>{
  const res = await api.get(`/employees`)
  return res.data
}

// get all leaves api
export const getAllLeavesAPI = async () => {
  const res = await api.get('/all-leaves')
  return res.data
}

// approve a leave
export const approveLeaveAPI = async (id:number) => {
  const res = await api.put(`/leave/${id}/approve`,{})
  return res.data
}

// reject a leave
export const rejectLeaveAPI = async (id:number) => {
  const res = await api.put(`/leave/${id}/reject`, {})
  return res.data
}
