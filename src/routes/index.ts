import { Router } from 'express'
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controller'

const router = Router()

router.post('/create', createUser)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

export default router;