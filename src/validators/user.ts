import Joi from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class EmployeeValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    createSchema = Joi.object({
        first_name: Joi.string().required().min(3).max(18),
        last_name: Joi.string().required().min(3).max(18),
        age: Joi.number().required().min(12),
        job_position: Joi.string().required(),
        gender: Joi.string().required(),
        user_name: Joi.string().required().min(3).max(18),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5),
        role: Joi.string()
    })

    updateSchema = Joi.object({
        first_name: Joi.string().min(3).max(18),
        last_name: Joi.string().min(3).max(18),
        photo: Joi.array(),
        age: Joi.number().min(12),
        job_position: Joi.string(),
        gender: Joi.string(),
        user_name: Joi.string().min(3).max(18),
        email: Joi.string().email(),
        role: Joi.string(),
        password: Joi.string().min(5),
        new_password: Joi.string().min(5)
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.createSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.updateSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
