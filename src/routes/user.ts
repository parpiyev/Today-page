import { NextFunction, Request, Response, Express, Router } from "express"
import multer from "multer"
import path from "path"
import { EmployeeController } from "../controllers/user"
import { EmployeeValidator } from "../validators/user"
import { hasPermission } from "../middlewares/hasPermission"

const router = Router({ mergeParams: true })
const controller = new EmployeeController()
const validator = new EmployeeValidator()

// // rasmdi qaysi faylga saqlashligi
const storage = multer.diskStorage({
    destination: function (
        req: Request,
        file: Express.Multer.File,
        cb: (error: null, destination: any) => void
    ) {
        cb(null, path.join(__dirname, "../", "uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
})

// foydalanuvchi rasm yubor yatganini tekshirish
const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: (error: null, destination: boolean) => void
) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

// rasm olchami
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

router
    .route("/")
    .get(hasPermission("adminGet"), controller.getAll)
    .post(
        hasPermission("adminCreate"),
        validator.create,
        controller.create
    )
router
    .route("/:id")
    .get(hasPermission("adminGet"), controller.get)
    .patch(
        hasPermission("userUpdate"),
        upload.array("photo", 10),
        validator.update,
        controller.update
    )
    .delete(hasPermission("adminDelete"), controller.delete)

export default router
