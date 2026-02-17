import { DataTypes , Model } from "sequelize";

export default function (sequelize){
    class Post extends Model{

    }

    Post.init({
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title:{
            type: DataTypes.STRING,
            allowNull: false
        },

        body:{
            type: DataTypes.INTEGER
        },

        userId:{
            type: DataTypes.INTEGER
        }
    },{
            tableName: "Posts",
            sequelize
    })

    return Post
}