import { IAbsence } from "../../models/absence"

export interface IAbsenceAllResponse {
    payloads: IAbsence[]
    count: number
}

export interface AbsenceRepo {
    create(payload: IAbsence): Promise<IAbsence>
    update(id: string, payload: IAbsence): Promise<IAbsence>
    delete(id: string): Promise<any>
    find(query: Object): Promise<IAbsence[]>
    findOne(query: Object): Promise<IAbsence>
    findById(id: string): Promise<IAbsence>
}
