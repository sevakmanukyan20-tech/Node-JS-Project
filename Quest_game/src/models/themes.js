import { DataTypes, Model } from "sequelize";

export default function(sequelize){
    class Themes extends Model{

    }

    Themes.init({
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING
        },
        Genre:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName:"questThemes",
        sequelize
    })
return Themes
}