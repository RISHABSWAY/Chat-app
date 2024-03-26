import express from "express"
import getAllUsers from "../controller/adminController.js"

const router = express.Router()


router.route('/admin').get(getAllUsers)

export default router