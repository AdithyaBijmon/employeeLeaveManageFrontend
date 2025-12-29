import Joi from 'joi'

export const employeeAddFormSchema = Joi.object({
    fullName:Joi.string().required().messages({
        "string.empty":"Full Name is required"
    }),
    email:Joi.string().email().required().messages({
        "string.empty":"Email is required",
        "string.email":"Please enter a valid email"
    }),
    password:Joi.string().min(6).required().messages({
        "string.empty":"Password is required",
        "string.min":"Password must be at least 6 characters."
    }),
    designation:Joi.string().required().messages({
        "string.empty":"Designation is required"
    })
})