import {db} from "../config/index.js"

export class Rooms_controller{
    static async FindAllRooms(req , res){
        const Rooms = await db.Rooms_Model.findAll()
        if(!Rooms){
            return res.status(404).json({msg:"Rooms not found"})
        }
        return res.status(200).json(Rooms)
    }

    static async FindRoomById(req , res){
        const Room = await db.Rooms_Model.findByPk(req.params.id)
        if(!Room){
            return res.status(404).send({msg:"Room not found"})
        }        
            return res.status(200).send(Room)
    }


    static async CreateRoom(req , res ){
        const NewRoom = db.Rooms_Model.create(req.body)
        if(!NewRoom){
            return res.status(404).send({msg:"wrong body type "})
        }
        return res.status(200).send({msg:"Room created successfully"})
    }

    static async DestroyRoomById(req , res){
        const deleted = await db.Rooms_Model.destroy({where: {id:req.params.id}})

        if(deleted){
            return res.status(200).json({msg:"Room deleted successfully"})
        }else{
            return res.status(404).send({msg:"Room not found"})
        }
    }

    static async UpdateRoomById(req , res){
        const updated = await db.Rooms_Model.update(req.body,{where:{id:req.params.id}})
        if(!updated){
            return res.status(200).json({msg:"Room updated successfully"})
        }else{
            return res.status(404).send({msg:"Room not found or wrong body type"})
        }
    }
}