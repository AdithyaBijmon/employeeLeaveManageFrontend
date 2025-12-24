import { createFileRoute, useNavigate } from '@tanstack/react-router'
import React, { useState } from 'react'
import { loginUser } from '../api/authService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginSchema } from '../schemas/auth.schema'




export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {

  const queryClient = useQueryClient();

  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' })
  const [viewPass, setViewPass] = useState<Boolean>(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const navigate = useNavigate()
  // console.log(loginCredentials)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      sessionStorage.setItem("token", data.token);
      queryClient.setQueryData(["authToken"], data.token);

      const userData = sessionStorage.setItem("user",JSON.stringify(data.user))
      console.log(userData)
      queryClient.setQueryData(["user"],data.user)
      // console.log(data.token)
      alert("Login successful");
      navigate({to:'/userDashboard/leaveForm'})
    },
    onError: (error: any) => {
      if (error.response?.status === 404) {
        alert("User not found");
      } else if (error.response?.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("Login failed");
      }

    }
  })

  const handleLogin = () => {
    const { error } = loginSchema.validate(loginCredentials, { abortEarly: false });

    if (error) {
      const newErrors: any = {};
      error.details.forEach(detail => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
      return;
    }

    else {
      mutation.mutate({
        email: loginCredentials.email,
        password: loginCredentials.password,
      });
    }
  }

  
  return (

    <div className='flex justify-center items-center my-20 '>
      <div className='shadow-lg shadow-gray-400 px-10 border border-gray-200 w-100 flex justify-center items-center rounded-3xl flex-col py-10'>

        <h1 className='font-bold text-3xl'>Login </h1>
        <img width={'80px'} className='my-3 ' src="https://cdn-icons-png.flaticon.com/512/272/272456.png" alt="login-image" />


        <input value={loginCredentials.email} onChange={handleChange} type="text" name='email' id='email' className=' w-full py-2 border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 hover:scale-105 transition transform ease-in-out' placeholder='Email ' />
        {errors.email && <p className="text-red-500 text-sm ml-5">{errors.email}</p>}



        <div className='relative w-full'>
          <input value={loginCredentials.password} onChange={handleChange} type={viewPass ? "text" : "password"} name='password' id='password' className=' w-full p-2 border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 hover:scale-105 transition transform ease-in-out' placeholder='Password ' />
          <i onClick={() => setViewPass(!viewPass)} className={viewPass ? "fa-solid fa-eye text-gray-400 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-600" : "fa-solid fa-eye-slash text-gray-400 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-600"}></i>

        </div>
        {errors.password && <p className="text-red-500 text-sm ml-5">{errors.password}</p>}



        <button onClick={handleLogin} className='font-bold bg-black text-white text-xl p-1 rounded-full w-full mt-5 shadow-lg shadow-gray-500 hover:scale-105 transition transform ease-in-out'>Login</button>

      </div>
    </div>

  )
}
