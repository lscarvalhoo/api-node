import { Router } from "express";
import { createTable, createUser, updateUser, selectAllUser, selectUser, deleteUser } from './Controller/Pessoa.js';

const router = Router();

router.get('/pessoas', selectAllUser);
router.get('/pessoa', selectUser);
router.post('/pessoa', createUser); 
router.put('/pessoa', updateUser);
router.delete('/pessoa', deleteUser);

export default router;