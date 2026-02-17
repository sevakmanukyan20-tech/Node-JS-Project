import express from "express"
import { db } from "../config/index.js"

export class User_Controller{
    
        static async getAllUsers(req, res){
            const users = await db.User_Model.findAll()
            res.json(users)
        }



        static async getUserbyId(req, res){
            const user = await db.User_Model.findByPk(req.params.id)
            if(!user){
                res.status(400).json({msg:"user not found"})
            }else{
                res.json(user)
            }
        }



        static async createUser(req,res){
            const {name , age , username } = req.body 
            if(!name || !age || !username){
                res.status(400).json({msg:"not enough info!"})
            }else{
                const newuser = await db.User_Model.create({name , age , username})
                res.json (newuser)
            }
        }


        static async deleteUser(req , res){
            const deleted = await db.User_Model.destroy({where: {id:req.params.id}})
            if(deleted){
                res.json({msg:"user deleted successfully"})
            }else{
                res.status(400).json({msg:"user not found"})
            }
        }



        static async updatedUser(req , res){
            const updates = req.body 
            const [updated] = await db.User_Model.update(updates,{where: {id:req.params.id}})
            if(updated){
                const updated_user = await db.User_Model.findByPk(req.params.id)
                res.json({msg:"user updated successfully", user:updated_user})
            }else{
                res.status(400).json({msg:"user not found"})
            }
        }
        
}