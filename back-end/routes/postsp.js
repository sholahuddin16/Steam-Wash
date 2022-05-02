import express from 'express';

import { createPostp, deletePostp, getPostp, getPostsp, updatePostp } from '../controllers/postsp.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPostsp);
router.post('/', auth, createPostp);
router.get('/:id', getPostp);
router.patch('/:id', auth, updatePostp);
router.delete('/:id', auth, deletePostp);

export default router;