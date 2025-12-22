
import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
     <nav style={{ display: 'flex', gap: '10px' }} className=' md:mx-10 mx-5 my-5 border border-gray-200 shadow-lg px-10 py-5 rounded-full  justify-between items-center '>
        <div>
            <h1 className='md:text-3xl text-xl font-bold'>Quick<span className='text-blue-500'>Grant</span> </h1>
        </div>
        <div className='flex items-center text-lg'>
            <Link to="/" activeProps={{ style: { fontWeight: 'bold',color:'blue' } }} className='transition  ease-in-out transform hover:scale-105'>Home</Link>
            <Link  to="/login" className='ms-5 transition  ease-in-out transform hover:scale-105' activeProps={{ style: { fontWeight: 'bold',color:'blue' } }}>Login</Link>
        </div>
      </nav>
  )
}

export default Header