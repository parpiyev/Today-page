import { EmployeeStorage } from "./mongo/user"
import { TimeStampStorage } from "./mongo/timeStamp"
import { AbsenceStorage } from "./mongo/absence"

interface IStorage {
    user: EmployeeStorage
    timeStamp: TimeStampStorage
    absence: AbsenceStorage
}

export let storage: IStorage = {
    user: new EmployeeStorage(),
    timeStamp: new TimeStampStorage(),
    absence: new AbsenceStorage()
}
