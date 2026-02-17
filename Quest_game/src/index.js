import express from "express"
import {Rooms_Route} from "./routes/Rooms_route.js"
import { Themes_Route } from "./routes/Themes_route.js"
import {db} from "./config/index.js"

const app = express()

db.sequelize.sync({force:true}).then(console.log("synced"))


app.use(express.json())
app.use("/rooms",Rooms_Route)
app.use("/quests",Themes_Route)


app.listen(3000, console.log("port listening on 3000 port"))