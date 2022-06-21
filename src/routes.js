import { Router } from "express";
import { createTable, createUser, updateUser, selectAllUser, selectUser, deleteUser } from './Controller/Pessoa.js';

const router = Router();

router.get('/pessoas', selectAllUser);

router.post('/pessoa', createUser);
router.get('/pessoa', selectUser);
router.put('/pessoa', updateUser);
router.delete('/pessoa', deleteUser);

export default router;