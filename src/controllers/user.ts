import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"
import fs from "fs"
import path from "path"
import { storage } from "../storage/main"
import { generateToken } from "../config/jwt"
import catchAsync from "../utils/catchAsync"
import { roles } from "../models/user"
import { IEmployee } from "../models/user"

export class EmployeeController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const users = await storage.user.find(req.query)

        res.status(200).json({ success: true, data: { users } })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findById(req.params.id)

        res.status(200).json({ success: true, data: { user } })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        const role = req.body.role
        const user_name = req.body.user_name

        const user = await storage.user.create({
            ...req.body,
            password: hashPassword,
            role: role && role == "admin" ? roles.admin : roles.user,
            user_name: user_name.toLowerCase()
        })

        const token = await generateToken({ user_name: user.user_name })

        res.status(201).json({ success: true, token })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findOne({ user_name: res.locals.user })
        const _user = await storage.user.findById(req.params.id)

        const role = req.body.role
        let userPhoto: any
        let userUpdate
        let hashPassword: any

        if (_user.photo.length > 0) {
            _user.photo.forEach((element) => {
                userPhoto = element.trim().split("/api/file/").pop()
            })

            fs.unlink(path.join(__dirname, "../", "uploads", userPhoto), (err) => {
                if (err) return err
            })
        }

        let photos = []
        for (let photo of req.files as Express.Multer.File[]) {
            photos.push(`/api/file/${photo.filename}`)
        }

        if (req.body.new_password) {
            const isValidPassword = bcrypt.compareSync(req.body.password, _user.password)
            if (!isValidPassword) throw new Error("Passsword is incorrect!")

            const salt = await bcrypt.genSalt()
            hashPassword = await bcrypt.hash(req.body.new_password, salt)
        }
        if (user.role.name == "admin") {
            userUpdate = await storage.user.update(req.params.id, {
                ...req.body,
                password: hashPassword,
                photo: photos,
                role: role && role == "admin" ? roles.admin : roles.user
            })
        } else {
            userUpdate = await storage.user.update(req.params.id, {
                password: hashPassword,
                photo: photos
            } as IEmployee)
        }

        res.status(200).json({ success: true, data: { userUpdate } })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findById(req.params.id)
        let userPhoto: any

        if (user.photo.length > 0) {
            user.photo.forEach((element) => {
                userPhoto = element.trim().split("/api/file/").pop()
            })

            fs.unlink(path.join(__dirname, "../", "uploads", userPhoto), (err) => {
                if (err) return err
            })
        }
        await storage.user.delete(req.params.id)

        res.status(204).json({ success: true, data: null })
    })
}
