import express from "express"
import { db } from "../config/index.js"


export class Post_controller{

    static async findPostById(req,res){
        const post = await db.Post_Model.findByPk(req.params.id, {
            attributes: { exclude: ["userId"] },
            include: [
                {
                    model: db.User_Model,
                    as: "author"
                }
            ]
            
        })
        if(!post){
            res.status(400).json({msg:"post not found"})
        }else{
            res.json(post)
        }
    }

    static async createPost(req,res){
        const { title, body, userId } = req.body
        const findUser = await db.User_Model.findByPk(userId)
        if(!findUser){
            return res.status(404).send({message: "User not found!"})
        }

        const newPost = await db.Post_Model.create({
            title,
            body,
            userId
        })
        return res.status(201).json(newPost);
    }
}