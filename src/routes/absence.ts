import { Router } from "express"
import { AbsenceController } from "../controllers/absence"
import { AbsenceValidator } from "../validators/absence"
import { hasPermission } from "../middlewares/hasPermission"

const router = Router({ mergeParams: true })
const controller = new AbsenceController()
const validator = new AbsenceValidator()

router
    .route("/")
    .get(hasPermission("userGet"), controller.getAll)
    .post(hasPermission("userCreate"), validator.create, controller.create)
router
    .route("/:id")
    .get(hasPermission("userGet"), controller.get)
    .patch(hasPermission("userUpdate"), validator.update, controller.update)
    .delete(hasPermission("userDelete"), controller.delete)

export default router
