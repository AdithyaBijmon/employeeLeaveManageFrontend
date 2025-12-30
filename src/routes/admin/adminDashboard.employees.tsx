import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { getEmployees, removeUserAPI, updateUserAPI } from '../../api/allServices';
import { useState } from 'react';

export const Route = createFileRoute('/admin/adminDashboard/employees')({
  component: RouteComponent,
})

function RouteComponent() {
  const queryClient = useQueryClient();
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [userUpdatedDetails, setUserUpdatedDetails] = useState({ fullName: "", email: "", designation: "" })



  const { data } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees
  })

  type UpdateUserPayload = {
    id: number;
    data: {
      fullName: string;
      email: string;
      designation: string;
    };
  };

  const updateUserMutation = useMutation({
    mutationFn: ({ id, data }: UpdateUserPayload) => {
      return updateUserAPI(id, data);
    },
    onSuccess: () => {
      setEditUserId(null);
      queryClient.invalidateQueries({ queryKey: ['employees'] })
      alert("Updated employee successfully");
    },
    onError: (error: any) => {
      if (error.response?.status == 500) {
        alert("Something went wrong")
      }
    }
  })



  const removeUserMutation = useMutation({
    mutationFn: removeUserAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: (error: any) => {
      if (error.response?.status == 500) {
        alert("Something went wrong")
      }
    }
  })

  const handleEdit = (employee: any) => {
    setEditUserId(employee.id)
    setUserUpdatedDetails((prev) => ({ ...prev, fullName: employee.fullName, email: employee.email, designation: employee.designation }))
  }

  const handleChange = (e: any) => {

    const { name, value } = e.target
    setUserUpdatedDetails((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  const handleUpdateUser = (id: number) => {

    updateUserMutation.mutate({ id, data: userUpdatedDetails })

  }

  const handleRemoveUser = (id: number) => {
    const confirmRemove = confirm("Are you sure you want to remove this user?")
    if (confirmRemove == true) {
      removeUserMutation.mutate(id)
    }
  }

  return (

    <>
      <table className="table-auto md:overflow-hidden overflow-x-auto  w-full border border-blue-200 rounded-lg shadow-xl">
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
              data?.map((employee: any, index: number) => (
                <tr key={employee.id} className="border-t border-gray-200">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-bold">
                    {editUserId == employee.id ?
                      <input name='fullName' type="text" value={userUpdatedDetails.fullName} onChange={handleChange} className='p-1 w-full border border-gray-200 rounded' />
                      :
                      employee.fullName
                    }
                  </td>
                  <td className="px-4 py-3">
                    {editUserId == employee.id ?
                      <input name='email' type="text" value={userUpdatedDetails.email} onChange={handleChange} className='p-1 w-full border border-gray-200 rounded' />
                      :
                      employee.email
                    }
                  </td>
                  <td className="px-4 py-3 ">
                    {editUserId == employee.id ?
                      <input name='designation' type="text" value={userUpdatedDetails.designation} onChange={handleChange} className='p-1 w-full border border-gray-200 rounded' />
                      :
                      employee.designation
                    }
                  </td>
                  <td className="px-4 py-3 text-center">
                    {

                      editUserId == employee.id ?

                        <div className='flex justify-between'>
                          <button onClick={() => handleUpdateUser(employee.id)} className='p-1 bg-green-500 text-white rounded'>Update</button>
                          <button onClick={() => setEditUserId(null)} className='p-1 bg-orange-500 text-white rounded'>Cancel</button>

                        </div>
                        :

                        <div className='flex '>
                          <button onClick={() => handleEdit(employee)}> <i className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer"></i></button>
                          <button onClick={() => handleRemoveUser(employee.id)}><i className="fa-solid fa-trash text-red-500 ms-5 cursor-pointer"></i></button>

                        </div>

                    }
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
