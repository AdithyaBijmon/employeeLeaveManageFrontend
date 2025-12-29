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

            {
                user?.role == 'user' ?
                    <h3 className="text-xl">Hi,<span className="text-blue-500 font-bold">{user && user.fullName}</span></h3>
                    :
                    <h3 className="text-xl text-blue-500 font-bold">ADMIN PANEL</h3>
            }
            <div className="md:my-10 my-5">
                <ul className="md:block flex items-center justify-between">
                    {
                        user?.role == 'user' ?
                        <div >
                            <li className="text-gray-500"><Link to="/userDashboard/leaveForm" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="me-1 fa-solid fa-paper-plane"></i>Apply Leave</Link></li>



                            <li className="mt-3 text-gray-500"><Link to="/userDashboard/leaveHistory" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="me-1 fa-solid fa-clock-rotate-left"></i>Leaves History</Link></li>
                        </div>
                        :
                        <div>
                        <li className="text-gray-500"><Link to="/admin/adminDashboard/panel" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="fa-solid fa-chart-line me-1"></i>Dashboard</Link></li>

                        <li className="text-gray-500 my-5"><Link to="/admin/adminDashboard/newEmployees" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="fa-solid fa-user-plus me-1"></i>New Employee</Link></li>

                        <li className="text-gray-500 "><Link to="/admin/adminDashboard/employees" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="fa-solid fa-users me-1"></i>Employees</Link></li>

                        <li className="text-gray-500 mt-5"><Link to="/admin/adminDashboard/leaves" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="fa-solid fa-user-clock me-1"></i>Leave Requests</Link></li> 
                        </div>

                    }
                </ul>

                <div className={user?.role=='user'?"md:my-10 my-5":"hidden"}>
                    <label className="ml-2 font-medium">Leave Balance : </label><span className='text-green-500 font-semibold'>20</span>

                </div>
            </div>
        </div>
    )
}

export default SideBar