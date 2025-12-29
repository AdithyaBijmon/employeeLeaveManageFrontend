import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { addEmployeeAPI } from "../../api/allServices";
import { employeeAddFormSchema } from "../../schemas/user.schema";

export const Route = createFileRoute(
    "/admin/adminDashboard/newEmployees"
)({
    component: NewEmployees,
});

function NewEmployees() {

    const [userDetails, setUserDetails] = useState({ fullName: "", email: "", password: "", designation: "" })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    console.log(userDetails)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setUserDetails((prev) => ({
            ...prev,
            [name]: value

        }))
    }

    const handleReset = () => {
        setUserDetails({ fullName: "", email: "", password: "", designation: "" })
    }

    const mutation = useMutation({
        mutationFn: addEmployeeAPI,
        onSuccess: () => {
            alert("User Added Successfully.")
        },
        onError: (error: any) => {
            if (error.response?.status === 409) {
                alert("Unauthorized user");
            }
            else if (error.response?.status === 500) {
                alert("Something went wrong")
            }
        }
    })

    const handleAddEmployee = () => {
        const { error } = employeeAddFormSchema.validate(userDetails, {
            abortEarly: false,
        });

        if (error) {
            const newErrors: any = {};
            error.details.forEach((detail) => {
                newErrors[detail.path[0]] = detail.message;
            });
            setErrors(newErrors);
            return;
        }
        else {
            mutation.mutate(userDetails)
            handleReset()
        }
    }

    return (
        <div className="px-4 md:px-20 ">
            <div className="border border-gray-200 shadow-xl shadow-gray-300 w-full p-8 md:p-12 rounded-2xl bg-white">

                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    <span className="text-blue-500">New</span> Employee
                </h2>

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input value={userDetails.fullName} onChange={handleChange} type="text" name="fullName" placeholder="Full Name" className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.fullName && (<p className="text-red-600 text-sm ml-5">{errors.fullName}</p>)}
                    </div>

                    <div>
                        <input value={userDetails.email} onChange={handleChange} type="email" name="email" placeholder="Email" className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.email && (<p className="text-red-600 text-sm ml-5">{errors.email}</p>)}
                    </div>
                </div>

                {/* Department & Leave Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <input value={userDetails.password} onChange={handleChange} type="password" name="password" placeholder="Password" className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.password && (<p className="text-red-600 text-sm ml-5">{errors.password}</p>)}
                    </div>

                    <div>
                        <input value={userDetails.designation} onChange={handleChange} type="text" name="designation" placeholder="Designation" className="w-full py-2 px-5 rounded-full border border-gray-200 shadow-lg" />
                        {errors.designation && (<p className="text-red-600 text-sm ml-5">{errors.designation}</p>)}
                    </div>


                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-8 px-2">
                    <button onClick={handleReset} className="bg-yellow-500 px-5 py-2 rounded-xl text-white font-semibold">Reset</button>

                    <button onClick={handleAddEmployee} type="button" className="bg-green-500 px-5 py-2 rounded-xl text-white font-semibold">Add</button>
                </div>

            </div>
        </div>
    )


}