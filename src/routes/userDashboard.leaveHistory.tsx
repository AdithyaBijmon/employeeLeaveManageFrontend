import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { cancelLeaveAPI, getAllLeavesAPI } from '../api/allServices'



export const Route = createFileRoute('/userDashboard/leaveHistory')({
  component: RouteComponent,

})


function RouteComponent() {

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['Leaves'],
    queryFn: getAllLeavesAPI
  })

  const leaveMutation = useMutation({
    mutationFn: cancelLeaveAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Leaves'] })
    }
  })

  const handleCancelLeave = (id: number) => {
    const confirmCancel = confirm("Are you sure you want to cancel the leave request?")
    if (confirmCancel == true) {
      leaveMutation.mutate(id)
    }
  }

  return (
    <>

      {
        !isLoading ?
          <div className='md:grid grid-cols-3 gap-5'>
            {
              data?.length > 0 ?
                data?.map((leave: any) => (
                  <div key={leave.id} className="my-3 border border-gray-200 bg-white rounded-2xl shadow-xl p-5 hover:scale-105 transition tranform ease-in-out">
                    <div className='my-2 flex justify-between items-center'>
                      <h3 className='text-gray-400'>{leave.dayType} Day Application</h3>
                      <button className='border border-orange-500 p-1 rounded text-xs bg-orange-100 text-orange-500'>{leave.status}</button>
                    </div>
                    {
                      leave.startDate == leave.endDate ?
                        <h2 className='text-2xl font-bold '>  {new Date(leave.startDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", })}</h2>
                        :

                        <h2 className='text-xl font-bold '>  {new Date(leave.startDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", })} - {new Date(leave.endDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", })} </h2>

                    }

                    <p className='text-yellow-500 font-semibold text-xl'>{leave.leaveType}</p>
                    <div className='flex justify-end'>
                      <button onClick={() => handleCancelLeave(leave.id)} className='text-white bg-red-600 p-1 rounded'>Cancel</button>
                    </div>

                  </div>
                ))
                :
                <p>You have'nt applied any leaves.</p>
            }


          </div>

          :
          <div className='flex items-center justify-center h-100'>
            <img width={'100px'} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />
          </div>
      }


    </>
  )
}
