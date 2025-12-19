import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
 
     <div className='flex justify-center items-center my-20'>
        <div className='shadow-lg  px-10 border border-gray-200 w-100 flex justify-center items-center rounded-2xl flex-col py-10'>
    
          <h1 className='font-bold text-3xl'>Login </h1>
          <img width={'80px'} className='my-3 ' src="https://cdn-icons-png.flaticon.com/512/272/272456.png" alt="login-image" />
          <input type="text" className=' w-full p-2 border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5' placeholder='Email '/>
          <input type="text" className=' w-full p-2 border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5' placeholder='Password '/>

          <button className='font-bold bg-black text-white text-xl p-1 rounded-full w-full mt-5 shadow-lg'>Login</button>
         
        </div>
     </div>
 
  )
}
