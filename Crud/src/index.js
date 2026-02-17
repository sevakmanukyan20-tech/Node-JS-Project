import express from "express"
import { db } from "./config/index.js"
import { Users_Route } from "./routes/Users_Route.js"
import { Posts_Route } from "./routes/Posts_Route.js"

db.sequelize.sync({alter:true}).then(console.log("synced"))

const app = express()
app.use(express.json())
app.use("/users", Users_Route)
app.use("/posts", Posts_Route)

app.listen(3000,() => console.log("server listen to port 3000"))