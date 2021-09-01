import Joi from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class TimeStampValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    createSchema = Joi.object({
        tasklist: Joi.array(),
        accomplished_tasks_count: Joi.number()
    })

    updateSchema = Joi.object({
        tasklist: Joi.array(),
        accomplished_tasks_count: Joi.number()
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
