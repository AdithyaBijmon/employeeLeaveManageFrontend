import { useQuery, } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router"


const SideBar = () => {
    // const queryClient = useQueryClient();

   const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => JSON.parse(sessionStorage.getItem("user") || ""),
    staleTime: Infinity,
  });

  
    


    return (
        <div className="h-fit w-full shadow-lg shadow-gray-400 rounded-xl p-5">

            <h3 className="text-xl">Hi,<span className="text-blue-500 font-bold">{user && user.fullName}</span></h3>
            <div className="md:my-10 my-5">
                <ul className="md:block flex items-center justify-between">
                    <li className="text-gray-500"><Link to="/userDashboard/leaveForm" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="me-1 fa-solid fa-paper-plane"></i>Apply Leave</Link></li>



                    <li className="mt-3 text-gray-500"><Link to="/userDashboard/leaveHistory" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="me-1 fa-solid fa-clock-rotate-left"></i>Leaves History</Link></li>

                </ul>

                <div className="md:my-10 my-5">
                    <label className="ml-2 font-medium">Leave Balance : </label><span className='text-green-500 font-semibold'>20</span>
                    
                </div>
            </div>
        </div>
    )
}

export default SideBar