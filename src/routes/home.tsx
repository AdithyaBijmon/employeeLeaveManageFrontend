import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=' h-100 w-full md:px-40 md:py-10 py-5 md:my-20 my-10 '>

      <div className='md:flex block justify-between px-10 items-center'>
        <img width={'400px'} className='floating-image md:my-0 my-5' src="https://media.istockphoto.com/id/1344608646/vector/team-welcomes-newcomer.jpg?s=612x612&w=0&k=20&c=uWJkUnY5BnEi0K0JE98dF0kqHEz2foG3IpsaHScmUZc=" alt="" />

        <div>

          <h1 className='font-bold md:text-6xl text-3xl'>Welcome to <span className='block text-blue-500'> QuickGrant</span></h1>
          <p className='my-5 text-gray-500'>Your hub for requesting time off, viewing leave balances,<br /> and tracking approvals seamlessly</p>
          <button className='font-bold  bg-blue-500 text-white shadow-gray-500  px-3 py-4 rounded-full  mt-5 shadow-lg hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"'>Let's get Started</button>

          <hr className='text-gray-300 my-7' />

        </div>


      </div>
    </div>
  )
}