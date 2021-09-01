import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"
import { storage } from "../storage/main"
import { generateToken } from "../config/jwt"
import catchAsync from "../utils/catchAsync"

export class LoginController {
    findOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findOne({ user_name: req.body.user_name })

        const isValidPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!isValidPassword) throw new Error("Passsword is incorrect!")

        const token = await generateToken({ user_name: user.user_name })

        res.status(201).json({ success: true, token })
    })
}
