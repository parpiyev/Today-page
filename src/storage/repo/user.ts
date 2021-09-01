import { IEmployee } from "../../models/user"

export interface IEmployeeAllResponse {
    payloads: IEmployee[]
    count: number
}

export interface EmployeeRepo {
    create(payload: IEmployee): Promise<IEmployee>
    update(id: string, payload: IEmployee): Promise<IEmployee>
    delete(id: string): Promise<any>
    find(query: Object): Promise<IEmployee[]>
    findOne(query: Object): Promise<IEmployee>
    findById(id: string): Promise<IEmployee>
}
