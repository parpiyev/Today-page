import mongoose, { Schema, Document } from "mongoose"
import { v4 as uuidv4 } from "uuid"

export interface IEmployee extends Document {
    _id: string
    first_name: string
    last_name: string
    photo: string[]
    age: number
    job_position: string
    gender: string
    user_name: string
    email: string
    password: string
    role: any
}

let roles = {
    admin: {
        name: "admin",
        operations: [
            "adminGet",
            "adminCreate",
            "adminUpdate",
            "adminDelete",
            "userGet",
            "userCreate",
            "userUpdate",
            "userDelete"
        ]
    },
    user: {
        name: "user",
        operations: ["userGet", "userCreate", "userUpdate", "userDelete"]
    }
}

let employeeSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        photo: {
            type: Array
        },
        age: {
            type: Number,
            required: true
        },
        job_position: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Object,
            default: roles.admin
        }
    },
    { timestamps: true }
)

export default mongoose.model<IEmployee>("Employee", employeeSchema)
export { roles }
