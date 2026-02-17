import express from "express"
import { Themes_controller } from "../controllers/Themes_controllers.js"

export const Themes_Route = express.Router()

Themes_Route.get("/",Themes_controller.FindAllThemes)
Themes_Route.get("/:id",Themes_controller.FindById)
Themes_Route.delete("/:id",Themes_controller.DestroyById)
Themes_Route.post("/",Themes_controller.CreateNewTheme)
//Themes_Route.put("/:id",Themes_controller.UpdateThemeById)