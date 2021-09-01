import { NextFunction, Request, Response } from "express"
import { storage } from "../storage/main"
import catchAsync from "../utils/catchAsync"

export class AbsenceController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const absences = await storage.absence.find(req.query)

        res.status(200).json({ success: true, data: { absences } })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const absence = await storage.absence.findById(req.params.id)

        res.status(200).json({ success: true, data: { absence } })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await storage.user.findOne({ user_name: res.locals.user })

        const absence = await storage.absence.create({ ...req.body, employee_id: user._id })
        res.status(201).json({ success: true, absence })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const absence = await storage.absence.update(req.params.id, { ...req.body })

        res.status(200).json({ success: true, data: { absence } })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.absence.delete(req.params.id)

        res.status(204).json({ success: true, data: null })
    })
}
