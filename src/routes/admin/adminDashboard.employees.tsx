import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { getEmployees } from '../../api/allServices';

export const Route = createFileRoute('/admin/adminDashboard/employees')({
  component: RouteComponent,
})

function RouteComponent() {
  // const queryClient = useQueryClient();
  
  const { data } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees
  })

  return (

    <>
      <table className="w-full border border-blue-200 rounded-lg overflow-hidden shadow-xl">
        <thead className="bg-blue-500 text-white text-sm uppercase">
          <tr>
            <th className="px-4 py-3 text-left">S.No</th>
            <th className="px-4 py-3 text-left">Full Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Designation</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody className="text-gray-600 ">
          {
            data?.length > 0 ?
              data?.map((employee:any,index:number) => (
                <tr key={employee.id} className="border-t border-gray-200">
                  <td className="px-4 py-3">{index+1}</td>
                  <td className="px-4 py-3 font-bold">{employee.fullName}</td>
                  <td className="px-4 py-3">{employee.email}</td>
                  <td className="px-4 py-3">{employee.designation}</td>
                  <td className="px-4 py-3 text-center">
                    <button> <i className="fa-solid fa-pen-to-square text-blue-500"></i></button>
                    <button><i className="fa-solid fa-trash text-red-500 ms-5"></i></button>

                  </td>
                </tr>
              ))
              :
              <p>No Employees.</p>
          }
        </tbody>
      </table>

    </>
  )
}
