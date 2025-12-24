import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { leaveFromSchema } from '../schemas/leave.schema'

export const Route = createFileRoute('/userDashboard/leaveForm')({
    component: RouteComponent,
})

function RouteComponent() {

    const [leaveFormDetails, setLeaveFormsDetails] = useState({
        fullName: '', phone: '', department: '', leaveType: '', dayType: '', startDate: '', endDate: '', leaveReason: ''
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    // console.log(leaveFormDetails)

    const handleChange = (e: any) => {
        const { name, value } = e.target

        setLeaveFormsDetails((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = () => {
        

        // console.log("Clicked");

        const { error } = leaveFromSchema.validate(leaveFormDetails, {
            abortEarly: false,
        });


        // console.log("Validation error:", error);
        // console.log("Form data:", leaveFormDetails);

        if (error) {
            const newErrors: any = {};
            error.details.forEach((detail) => {
                newErrors[detail.path[0]] = detail.message;
            });
            setErrors(newErrors);
            return;
        }

        alert("Successful");
    };



    return (
        <div className="px-4 md:px-20 ">
            <div className="border border-gray-200 shadow-xl shadow-gray-300 w-full p-8 md:p-12 rounded-2xl bg-white">

                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    <span className="text-blue-500">Leave</span> Application Form
                </h2>

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input type="text" name="fullName" placeholder="Full Name" value={leaveFormDetails.fullName} onChange={handleChange} className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.fullName && (<p className="text-red-600 text-sm ml-5">{errors.fullName}</p>)}
                    </div>

                    <div>
                        <input type="text" name="phone" placeholder="Phone" value={leaveFormDetails.phone} onChange={handleChange} className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.phone && (<p className="text-red-600 text-sm ml-5">{errors.phone}</p>)}
                    </div>
                </div>

                {/* Department & Leave Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <input type="text" name="department" placeholder="Department" value={leaveFormDetails.department} onChange={handleChange} className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.department && (<p className="text-red-600 text-sm ml-5">{errors.department}</p>)}
                    </div>

                    <div>
                        <select name="leaveType" value={leaveFormDetails.leaveType} onChange={handleChange} className="w-full py-3 px-5 rounded-full border border-gray-200 shadow-lg text-gray-500">
                            <option hidden>Leave Type</option>
                            <option value="sick">Sick</option>
                            <option value="casual">Casual</option>
                            <option value="annual">Annual</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.leaveType && (<p className="text-red-600 text-sm ml-5">{errors.leaveType}</p>)}
                    </div>
                </div>

                {/* Day Type */}
                <div className="mt-4 md:w-1/2">
                    <select name="dayType" value={leaveFormDetails.dayType} onChange={handleChange} className="w-full py-3 px-5 rounded-full border border-gray-200 shadow-lg text-gray-500" >
                        <option hidden>Day Type</option>
                        <option value="full">Full Day</option>
                        <option value="firstHalf">First Half</option>
                        <option value="secondHalf">Second Half</option>
                    </select>
                    {errors.dayType && (<p className="text-red-600 text-sm ml-5">{errors.dayType}</p>)}
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="ml-2 font-medium">Start Date</label>
                        <input type="date" name="startDate" value={leaveFormDetails.startDate} onChange={handleChange} className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg"
                        />
                        {errors.startDate && (<p className="text-red-600 text-sm ml-5">{errors.startDate}</p>)}
                    </div>

                    <div>
                        <label className="ml-2 font-medium">End Date</label>
                        <input type="date" name="endDate" value={leaveFormDetails.endDate} onChange={handleChange} className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg"
                        />
                        {errors.endDate && (<p className="text-red-600 text-sm ml-5">{errors.endDate}</p>)}
                    </div>
                </div>

                {/* Leave Balance */}
                <div className="mt-6">
                    <label className="ml-2 font-medium">Leave Balance : </label><span className='text-green-500 font-semibold'>20</span>
                    
                </div>

                {/* Reason */}
                <div className="mt-6">
                    <textarea name="leaveReason" placeholder="Reason for leave..." value={leaveFormDetails.leaveReason} onChange={handleChange} className="w-full py-4 px-6 rounded-2xl border border-gray-200 shadow-lg"></textarea>
                    {errors.leaveReason && (<p className="text-red-600 text-sm ml-5">{errors.leaveReason}</p>)}
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-8 px-2">
                    <button className="bg-yellow-500 px-5 py-2 rounded-xl text-white font-semibold">Reset</button>

                    <button type="button" onClick={handleSubmit} className="bg-green-500 px-5 py-2 rounded-xl text-white font-semibold">Submit</button>
                </div>

            </div>
        </div>
    )
}
