import { NextFunction, Request, Response } from "express"
import { storage } from "../storage/main"
import catchAsync from "../utils/catchAsync"

export class TimeStampController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const timeStamps = await storage.timeStamp.find(req.query)

        res.status(200).json({ success: true, data: { timeStamps } })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const timeStamp = await storage.timeStamp.findById(req.params.id)

        res.status(200).json({ success: true, data: { timeStamp } })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findOne({ user_name: res.locals.user })
        const tasklist = req.body.tasklist

        const timeStamp = await storage.timeStamp.create({
            ...req.body,
            employee_id: user._id,
            planned_tasks_count: tasklist.length,
            came_at: Date.now()
        })
        res.status(201).json({ success: true, timeStamp })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const tasklist = req.body.tasklist

        const timeStamp = await storage.timeStamp.update(req.params.id, {
            ...req.body,
            planned_tasks_count: tasklist.length,
            gone_at: Date.now()
        })

        res.status(200).json({ success: true, data: { timeStamp } })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.timeStamp.delete(req.params.id)

        res.status(204).json({ success: true, data: null })
    })
}
