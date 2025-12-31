import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { approveLeaveAPI, getAllLeavesAPI, rejectLeaveAPI } from '../../api/allServices'

export const Route = createFileRoute('/admin/adminDashboard/leaves')({
  component: RouteComponent,
})

function RouteComponent() {

  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['Leaves'],
    queryFn: getAllLeavesAPI
  })

  const approveMutation = useMutation({
    mutationFn: approveLeaveAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Leaves'] })

    }
  })

  const rejectMutation = useMutation({
    mutationFn: rejectLeaveAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Leaves'] })
    }
  })

  const approveLeave = (id: number) => {
    const confirmApprove = confirm('Are you sure you want to approve this leave?')
    if (confirmApprove == true) {
      approveMutation.mutate(id)
    }
  }

  const rejectLeave = (id: number) => {
    const confirmReject = confirm('Are you sure you want to reject this leave?')
    if (confirmReject == true) {
      rejectMutation.mutate(id)
    }
  }

  return (
    <>


      <table className="table-auto md:overflow-hidden overflow-x-auto block w-full border border-blue-200 rounded-lg shadow-xl">
        <thead className="bg-blue-500 text-white text-sm uppercase">
          <tr>
            <th className="px-4 py-3 text-left">S.No</th>
            <th className="px-4 py-3 text-left">Full Name</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Department</th>
            <th className="px-4 py-3 text-center">Leave type</th>
            <th className="px-4 py-3 text-center">Day type</th>
            <th className="px-4 py-3 text-center">Date</th>
            <th className="px-4 py-3 text-center">Leave Reason</th>
            <th className="px-4 py-3 text-center">...</th>
          </tr>
        </thead>

        <tbody className="text-gray-600 text-sm ">
          {
            data?.length > 0 ?
              data?.map((leave: any, index: number) => (
                <tr key={leave.id} className="border-t border-gray-200">
                  <td className="px-4 md:py-3 py-1">{index + 1}</td>
                  <td className="px-4 md:py-3 py-1 font-bold">{leave.fullName}</td>
                  <td className="px-4 md:py-3 py-1">{leave.phone}</td>
                  <td className="px-4 md:py-3 py-1">{leave.department}</td>
                  <td className="px-4 md:py-3 py-1">{leave.leaveType}</td>
                  <td className="px-4 md:py-3 py-1">{leave.dayType}</td>

                  {
                    leave.startDate == leave.endDate ?
                      <td className="px-4 md:py-3 py-1"> {new Date(leave.startDate).toLocaleDateString("en-IN", { day: "2-digit", month: "numeric", year: "numeric", })}</td>


                      :
                      <td className="px-4 md:py-3 py-1"> {new Date(leave.startDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", })} - {new Date(leave.endDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", })}</td>

                  }
                  <td className="px-4 md:py-3">{leave.leaveReason}</td>
                  <td className="px-4 md:py-3 py-1 text-center flex ">
                    {
                      leave.status == 'pending' ?
                        <>
                          <button onClick={() => approveLeave(leave.id)} className='text-green-600 me-3'><i className="fa-solid fa-check text-lg"></i></button>
                          <button onClick={() => rejectLeave(leave.id)} className='text-red-600 '><i className="fa-solid fa-multiply text-lg"></i></button>
                        </>
                        :
                        leave.status == "approved" ?
                          <button className='border border-green-500 p-1 rounded text-xs bg-green-100 text-green-500'>APPROVED</button>

                          :
                          <button className='border border-red-500 p-1 rounded text-xs bg-red-100 text-red-500'>REJECTED</button>
                    }


                  </td>
                </tr>
              ))
              :
              <p>No Leave Requests.</p>
          }
        </tbody>
      </table>


    </>
  )
}
