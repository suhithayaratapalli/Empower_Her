import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

import {
  createUserValidation,
  userIdValidation,
} from '../validations/userValidation.js';

const router = express.Router();

router.post('/', createUserValidation, createUser);
router.get('/', getAllUsers);
router.get('/:id', userIdValidation, getUserById);
router.put('/:id', userIdValidation, updateUser);
router.delete('/:id', userIdValidation, deleteUser);

export default router;
