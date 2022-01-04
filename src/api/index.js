//this section is for API calls using axios
import axios from 'axios'

const url="http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost= (id)=> axios.delete(`${url}/${id}`);
export const updatePost= (id, updatedPost)=>axios.patch(`${url}/${id}`,updatedPost)
export const likePost= (id)=>axios.patch(`${url}/${id}/likePost`) 