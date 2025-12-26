import Joi from "joi";

const today = new Date()

export const leaveFromSchema = Joi.object({
    fullName: Joi.string().required().messages({
        "string.empty": "Full Name is required."
    }),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required().messages({
        'string.length': 'Phone number must be exactly 10 digits long.',
        'string.pattern.base': 'Phone number must contain only digits.',
        'string.empty': "Phone Number is required"
    }),
    department: Joi.string().required().messages({
        "string.empty": "Department is required."
    }),
    leaveType: Joi.string().required().messages({
        "string.empty": "Please select a leave type."
    }),
    dayType: Joi.string().required().messages({
        "string.empty": "Please select a day type."
    }),
    startDate: Joi.date().required().min(today).messages({
        'date.min':'Start date cannot be in the past',
        'date.base': 'Start Date is required'
    }),
    endDate: Joi.date().required().min(Joi.ref("startDate")).messages({
        'date.min': 'End date must be greater than or equal to start date',
        'date.base': 'End Date is required'
    }),
    leaveReason: Joi.string().required().messages({
        'string.empty': "Leave reason is required",
        'string.required': 'Leave Reason is required.'
    })


})