import { db } from "../config/index.js";

export class Themes_controller{
    static async FindAllThemes( req , res ){
        const Themes = await db.Themes_Model.findAll()
        if(!Themes){
            return res.status(404).json({msg:"Themes not found"})
        }
        return res.status(200).json(Themes)
    }


    static async FindById(req , res ){
        const Theme = await db.Themes_Model.findByPk(req.params.id)
        if(!Theme){
            return res.status(404).send({msg:"Theme not found"})
        }        
        res.status(200).send(Theme)
    }


    static async DestroyById(req ,res ){
        const deleted = await db.Themes_Model.destroy({where: {id:req.params.id}})

        if(deleted){
            return res.status(200).json({msg:"Theme deleted successfully"})
        }else{
            return res.status(404).send({msg:"Theme not found"})
        }
    }

    static async CreateNewTheme(req , res){
        const NewTheme = db.Themes_Model.create(req.body)
        if(!NewTheme){
            return res.status(404).send({msg:"wrong Theme type"})
        }else{
            return res.status(200).send({msg:"Theme created successfully", NewTheme})
        }
    }
}