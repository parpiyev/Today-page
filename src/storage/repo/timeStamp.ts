import { ITimeStamp } from "../../models/timeStamp"

export interface ITimeStampAllResponse {
    payloads: ITimeStamp[]
    count: number
}

export interface ITimeStampRepo {
    create(payload: ITimeStamp): Promise<ITimeStamp>
    update(id: string, payload: ITimeStamp): Promise<ITimeStamp>
    delete(id: string): Promise<any>
    find(query: Object): Promise<ITimeStamp[]>
    findOne(query: Object): Promise<ITimeStamp>
    findById(id: string): Promise<ITimeStamp>
}
