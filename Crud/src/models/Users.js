import { DataTypes , Model } from "sequelize";

export default function(sequelize){
    class User extends Model{

    }

User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "USERS",
        timestamps: true,
        sequelize 
    });

    return User;
}