import { DataTypes, Model } from "sequelize";

export default function(sequelize){
    class Rooms extends Model{

    }

    Rooms.init({
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            unique:true

        },
        size:{
            type:DataTypes.STRING
        },
        theme_id:{
            type:DataTypes.INTEGER
        }
    },
        {
            tableName:"Rooms",
            sequelize
        })    
        return Rooms
}