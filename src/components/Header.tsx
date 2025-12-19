
import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
     <nav style={{ display: 'flex', gap: '10px' }} className=' mx-10 my-5 border border-gray-200 shadow-lg px-10 py-5 rounded-full  justify-between items-center '>
        <div>
            <h1 className='text-3xl font-bold'>EmpManage</h1>
        </div>
        <div className='flex items-center text-lg'>
            <Link to="/home" activeProps={{ style: { fontWeight: 'bold',color:'blue' } }}>Home</Link>
            <Link to="/login" className='ms-5' activeProps={{ style: { fontWeight: 'bold',color:'blue' } }}>Login</Link>
        </div>
      </nav>
  )
}

export default Header