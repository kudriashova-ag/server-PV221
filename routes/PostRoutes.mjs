import express from 'express';
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/PostController.mjs';
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


export default router;