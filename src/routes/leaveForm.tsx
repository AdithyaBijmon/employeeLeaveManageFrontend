import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/leaveForm')({
    component: RouteComponent,
})

function RouteComponent() {

    const [leaveFormDetails,setLeaveFormsDetails] = useState({
        fullName:'',email:'',department:'',leaveType:'',startDate:'',endDate:'',leaveBalance:'20',leaveReason:''
    })

    // console.log(leaveFormDetails)

    const handleChange = (e: any)=>{
        const {name,value} = e.target

        setLeaveFormsDetails((prev)=>({
            ...prev,
            [name]:value
        }))

    }


    return (
        <div className='md:px-40 px-5 my-10'>


            <div className='border border-gray-200 shadow-xl shadow-gray-400 w-full p-5 rounded-2xl my-5'>

                <h2 className='md:text-3xl text-2xl font-bold mx-3'><span className='text-blue-500'>Leave</span> Application Form</h2>

                <div className='md:flex w-full items-center'>
                    <input onChange={handleChange} value={leaveFormDetails.fullName} type="text" name='fullName'id='fullName' className='py-2 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 ' placeholder='Full Name ' />

                    <input onChange={handleChange} value={leaveFormDetails.email} type="text" name='email' id='email' className='md:ms-5 py-2 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 ' placeholder='Email ' />
                </div>

                <div className='md:flex w-full items-center'>

                    <input onChange={handleChange} value={leaveFormDetails.department} type="text" name='department' id='department' className=' py-2 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 ' placeholder='Department' />


                    <select onChange={handleChange} value={leaveFormDetails.leaveType}  name="leaveType" id="types" className='md:ms-5 py-3 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 text-gray-500'>
                        <option  hidden>Leave Type</option>
                        <option value="sick">Sick</option>
                        <option value="casual">Casual</option>
                        <option value="annual">Annual</option>
                        <option value="other">Other</option>
                    </select>


                </div>

                <div className='md:flex w-full items-center'>
                    <div className='md:inline-block md:mx-5'>
                        <label htmlFor="startDate">Start date of leave:</label>
                        <input onChange={handleChange} value={leaveFormDetails.startDate} id='startDate' name='startDate'  type="date" className=' py-2 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 ' data-placeholder="Choose a Date" />
                    </div>


                    <div className='md:inline-block md:mx-5'>
                        <label htmlFor="endDate">End date of leave:</label>
                        <input onChange={handleChange} value={leaveFormDetails.endDate} id='endDate' name='endDate' type="date" className=' py-2 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-5 ' data-placeholder="Choose a Date" />
                    </div>

                </div>

                <div className='inline-block md:mx-5 items-center'>
                    <label htmlFor="startDate">Leave Balance:</label>
                    <input  type="text" name='leaveBalance' value={leaveFormDetails.leaveBalance} readOnly className='text-green-500' />
                </div>

                <div className='w-full'>
                    <textarea onChange={handleChange} value={leaveFormDetails.leaveReason} name="leaveReason" id="leaveReason" className='py-4 w-full border border-gray-100 placeholder-gray-400 my-3 rounded-full shadow-lg px-7 ' placeholder='Reason for leave...'></textarea>
                </div>

                <div className='flex justify-between items-center mx-5'>
                    <button className='bg-yellow-500 py-2 px-3 rounded-xl text-white'>Reset</button>
                    <button className='bg-green-500 py-2 px-3 rounded-xl text-white'>Submit</button>
                </div>
            </div>

        </div>
    )
}
