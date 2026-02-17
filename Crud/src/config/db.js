import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();


export const sequelize = new Sequelize(
    process.env.NAME,
    process.env.USER,
    process.env.PASS,
    {
        host: process.env.HOST,
        port: process.env.PORT || 3306,
        dialect: 'mysql',
        logging: false
    }
);