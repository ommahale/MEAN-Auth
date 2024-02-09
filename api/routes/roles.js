import express from 'express';
import Role from '../models/Role.js';
import mongoose from 'mongoose';

const router = express.Router()

//Create paths
router.post('/create',async(req, res, next)=>{
    try{
        if (req.body.role && req.body.role != ""){
            const newRole = new Role(req.body)
            await newRole.save()
            return res.status(201).send({"message":"Role Created"})
        }
        else res.status(400).send({"message":"Bad Request!"})
    }
    catch(e){
        console.log(e)
        res.status(500).send({"message":"Internal Server Error!"})
    }
})

router.get('/:id',async(req, res, next)=>{
    try{
        const _id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(_id)){
            res.status(400).send({"message":"Invalid ID!"})
        }
        else{
            const role = await Role.findById({_id:_id})
            if(!role){
                res.status(404).send({"message":"Role Not Found!"})
            }
            else{
                res.send(role)
            }
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send({"message":"Internal Server Error!"})
    }
})

router.put('/:id',async(req, res, next)=>{
    try{
        const _id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(_id)){
            res.status(400).send({"message":"Invalid ID!"})
        }
        else{
            const role = await Role.findByIdAndUpdate(
                _id,
                {$set:req.body},
                {new:true}
            )
            if(!role){
                res.status(404).send({"message":"Role Not Found!"})
            }
            else{
                res.status(200).send({"message":"Role Updated!"})
            }
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send({"message":"Internal Server Error!"})
    }
})

export default router;