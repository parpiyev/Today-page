import mongoose, { Schema, Document } from "mongoose"
import { v4 as uuidv4 } from "uuid"

export interface ITimeStamp extends Document {
    _id: string
    came_at: Date
    gone_at: Date
    tasklist: string[]
    accomplished_tasks_count: number
    planned_tasks_count: number
    employee_id: string
}

let timeStampSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4
        },
        came_at: {
            type: Date
        },
        gone_at: {
            type: Date
        },
        tasklist: {
            type: Array
        },
        accomplished_tasks_count: {
            type: Number
        },
        planned_tasks_count: {
            type: Number
        },
        employee_id: {
            type: String,
            ref: "Employee"
        }
    },
    { timestamps: true }
)

export default mongoose.model<ITimeStamp>("TimeStamp", timeStampSchema)
