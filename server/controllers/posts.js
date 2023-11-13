import express from 'express';
import mongoose from 'mongoose';

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts=async (req,res)=>{
    try {
        const postMessages=await PostMessage.find();

        // console.log(postMessages);
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const createPost=async (req,res)=>{
    const { title, message, selectedFile, creator, tags } = req.body;
    

    console.log(req.body);
    // console.log(title);
    try {
            const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags });
            console.log(tags);
            newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
export const updatePost=async (req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');        
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.json(updatedPost);
    
}

export const deletePost=async (req,res)=>{
    const {id}=req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');  

    await PostMessage.findByIdAndDelete(id);
    res.json("Post Deleted successfully.");

}

export const likePost=async (req,res)=>{
    const {id}=req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id'); 

    const post=await PostMessage.findById(id);
    const updatedPost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});

    res.json(updatedPost);

}