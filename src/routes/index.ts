import express from "express"
import path from "path"
import userRouter from "./user"
import loginRouter from "./login"
import timeStampRouter from "./timeStamp"
import absenceRouter from "./absence"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "../../swagger"

const router = express.Router({ mergeParams: true })

router.use("/user", userRouter)
router.use("/login", loginRouter)
router.use("/time-stamp", timeStampRouter)
router.use("/absence", absenceRouter)
router.use("/api/file", express.static(path.join(__dirname, "../", "uploads")))
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default router
