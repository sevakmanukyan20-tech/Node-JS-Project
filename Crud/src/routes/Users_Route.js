import express from "express"
import { User_Controller } from "../controllers/User_controller.js"

export const Users_Route = express.Router()

Users_Route.get("/", User_Controller.getAllUsers)
Users_Route.get("/:id", User_Controller.getUserbyId)
Users_Route.post("/", User_Controller.createUser)
Users_Route.delete("/:id",User_Controller.deleteUser)