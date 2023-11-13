import axios, { Axios } from 'axios';

const url='http://localhost:5000/posts';

export const fetchPosts=()=>axios.get(url);
export const createPost=async (newPost)=>await axios.post(url,newPost);
export const updatePost=async (id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost);
export const deletePost=async (id)=>axios.delete(`${url}/${id}`);
export const likePost=async (id)=>axios.patch(`${url}/${id}/likePost`);