import { Post_controller } from "../controllers/Post_controller.js"
import express from "express"

export const Posts_Route = express.Router()

Posts_Route.get("/:id",Post_controller.findPostById)
Posts_Route.post("/", Post_controller.createPost)