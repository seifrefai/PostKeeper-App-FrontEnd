import express from 'express';
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js"

//We create the logic here by setting up asyn functions since getting or posting could take some time
export const getPosts= async (req,res)=>{
    try {
        const postMessage= await PostMessage.find()
        
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//check this link for 

export const createPost= async (req,res)=>{
    const post= req.body; 
    const newPost= new PostMessage(post);
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost= async (req,res)=>{
    //This is renaming the id from request to _id
    const { id: _id } = req.params;
    const post =req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const updatedPost= await PostMessage.findByIdAndUpdate(_id,{...post, _id}, {new: true});

    res.json(updatedPost);
}

export const likePost= async (req,res)=>{
    //This is renaming the id from request to _id
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const post = await PostMessage.findById(_id);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
    

export const deletePost= async (req,res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
