import { Router } from "express"
import { TimeStampController } from "../controllers/timeStamp"
import { TimeStampValidator } from "../validators/timeStamp"
import { hasPermission } from "../middlewares/hasPermission"

const router = Router({ mergeParams: true })
const controller = new TimeStampController()
const validator = new TimeStampValidator()

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
