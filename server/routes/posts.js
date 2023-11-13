import express from "express";

import { getPosts }   from "../controllers/posts.js";
import { createPost } from "../controllers/posts.js";
import { updatePost } from "../controllers/posts.js";
import {deletePost}   from "../controllers/posts.js";
import {likePost}   from "../controllers/posts.js";

const router=express.Router();  //The express.Router() function is used to create a new router object. 
                                //This function is used when you want to create a new router object in your program to handle requests. 

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);


export default router