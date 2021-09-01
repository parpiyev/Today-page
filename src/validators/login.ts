import Joi, { string } from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class LoginValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    createSchema = Joi.object({
        user_name: Joi.string().required(),
        password: Joi.string().required()
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.createSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
