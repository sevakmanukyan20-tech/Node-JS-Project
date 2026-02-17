import express from "express"
import { Rooms_controller } from "../controllers/Rooms_controllers.js"

export const Rooms_Route = express.Router()

Rooms_Route.get("/",Rooms_controller.FindAllRooms)
Rooms_Route.get("/:id",Rooms_controller.FindRoomById)
Rooms_Route.post("/",Rooms_controller.CreateRoom)
Rooms_Route.delete("/:id",Rooms_controller.DestroyRoomById)
Rooms_Route.put("/:id",Rooms_controller.UpdateRoomById)