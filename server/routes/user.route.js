import express from "express"
import isAUth from "../middleware/isAuth.js"
import { getCurrentUser } from "../controllers/user.controller.js"

const userRouter= express.Router()

userRouter.get("/currentUser",isAUth,getCurrentUser)

export default userRouter