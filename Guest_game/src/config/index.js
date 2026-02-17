import { sequelize } from "./db.js";
import Roomsloader from "../models/rooms.js"
import Themesloader from "../models/themes.js"

export const db = {}

db.sequelize = sequelize
db.Themes_Model = Themesloader(sequelize)
db.Rooms_Model = Roomsloader(sequelize)

db.Rooms_Model.hasMany(db.Themes_Model , {
    foreignKey:"theme_id",
    as:"Themes"
})

db.Themes_Model.belongsTo(db.Rooms_Model,{
    foreignKey:"theme_id",
    as:"author"
})