import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import SideBar from '../components/SideBar'
import { isAdmin, isAuthenticated } from '../utils/auth'


export const Route = createFileRoute('/userDashboard')({
  component: RouteComponent,
  beforeLoad:()=>{
          if(!isAuthenticated()){
             throw redirect({
                  to:'/login',
              })
          }

          if(isAdmin()){
            sessionStorage.clear()
            throw redirect({
              to:'/login'
            })
          }
      }
})

function RouteComponent() {
  return (

  <div>

    <div className="md:grid grid-cols-4 md:px-20 px-5 gap-10  my-10">
        <div className="col-span-1">
           <SideBar/>
        </div>
        <div className="col-span-3 md:my-0 my-10">
         <Outlet />
        </div>
    </div>
   
    
  </div>

)
}
