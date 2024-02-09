import express from 'express';
import Role from '../models/Role.js';

const router = express.Router()

//Create paths
router.post('/create',async(req, res, next)=>{
    try{
        if (req.body.role && req.body.role != ""){
            const newRole = new Role(req.body)
            await newRole.save()
            return res.status(201).send({"message":"Role Created"})
        }
        else res.status(400).send({"message":"Bad Request"})
    }
    catch(e){
        console.log(e)
        res.status(500).send({"message":"Internal Server Error"})
    }
})

export default router;