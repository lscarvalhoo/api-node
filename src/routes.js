import { Router } from "express";
import { createTable, createUser, updateUser, login } from './Controller/Pessoa.js';

const router = Router();

router.get('/login', login);
router.post('/createUser', createUser); 
router.put('/updateUser', updateUser); 

export default router;