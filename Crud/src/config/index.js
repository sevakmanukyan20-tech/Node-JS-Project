import { sequelize } from "./db.js";
import UserLoader from "../models/Users.js"
import PostLoader from "../models/Posts.js"

export const db = {}
db.sequelize = sequelize
db.User_Model = UserLoader(sequelize)
db.Post_Model = PostLoader(sequelize)
 
 
db.User_Model.hasMany(db.Post_Model, {
    foreignKey: "userId",
    as: "posts"
})

db.Post_Model.belongsTo(db.User_Model, {
    foreignKey: "userId",
    as: "author"
})