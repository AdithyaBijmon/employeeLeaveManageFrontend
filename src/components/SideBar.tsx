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
            <div className="my-10">
                <ul>
                    <li><Link to="/userDashboard/leaveForm" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="me-1 fa-solid fa-paper-plane"></i>Apply Leave</Link></li>



                    <li className="mt-3"><Link to="/userDashboard/leaveHistory" activeProps={{ style: { fontWeight: "bold", color: "#337ef5ff", } }}><i className="me-1 fa-solid fa-clock-rotate-left"></i>Leaves History</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default SideBar