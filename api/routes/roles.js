import express from 'express';
import {createRole, getRole, updateRole, getAllRole} from '../controllers/roleController.js'

const router = express.Router()

//Create paths
router.get('/getAll', getAllRole )
router.post('/create', createRole)
router.get('/:id', getRole )
router.put('/:id', updateRole)

export default router;