import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/adminDashboard/panel')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='md:grid grid-cols-3 gap-10 w-full '>

    <div className='bg-yellow-500 w-full shadow-xl rounded-xl p-5 text-white flex justify-between items-center'>
      <i className="fa-solid fa-users me-1 text-4xl"></i>
      <div>
        <h2 className='text-2xl font-semibold'>Employees</h2>
        <h5 className='text-center font-semibold text-2xl'>10</h5>
      </div>
    </div>

    <div className='bg-sky-500 w-full shadow-xl rounded-xl p-5 text-white flex justify-between items-center md:my-0 my-3'>
      <i className="fa-solid fa-user text-4xl"></i>
      <div>
        <Link to='/admin/adminDashboard/newEmployees'>
          <h2 className='text-2xl font-semibold'>Add Employee</h2>
          <p className='text-center font-semibold cursor-pointer'> <i className="fa-solid fa-user-plus"></i></p>
        </Link>
      </div>
    </div>

    <div className='bg-green-500 w-full shadow-xl rounded-xl p-5 text-white flex justify-between items-center'>
      <i className="fa-solid fa-user-clock text-4xl"></i>
      <div>
        <h2 className='text-2xl font-semibold'>Leave Requests</h2>
        <h5 className='text-center font-semibold text-2xl'>10</h5>
      </div>
    </div>

  </div>
}
