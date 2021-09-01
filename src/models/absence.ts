import mongoose, { Schema, Document } from "mongoose"
import { v4 as uuidv4 } from "uuid"

export interface IAbsence extends Document {
    _id: string
    reason: string
    employee_id: string
}

let absenceSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4
        },
        reason: {
            type: String,
            required: true
        },
        employee_id: {
            type: String,
            ref: "Employee"
        }
    },
    { timestamps: true }
)

export default mongoose.model<IAbsence>("Absence", absenceSchema)
