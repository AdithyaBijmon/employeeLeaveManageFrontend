import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=' h-100 w-full px-40 py-10 my-10 '>
    
    <div className='flex justify-between px-10'>
      <img width={'400px'} className='floating-image ' src="https://images.icon-icons.com/403/PNG/512/users_40493.png" alt="" />
  
     <div>
   
        <h1 className='font-bold text-6xl'>Welcome to <span className='block text-blue-500'> EmpManage</span></h1>
        <p className='my-5 text-gray-500'>Your hub for requesting time off, viewing leave balances,<br /> and tracking approvals seamlessly</p>
        <button className='font-bold  bg-blue-500 text-white shadow-gray-500  px-3 py-4 rounded-full  mt-5 shadow-lg'>Let's get Started</button>

        <hr className='text-gray-300 my-7'/>
        
     </div>
     
        
    </div>
    </div>
  )
}