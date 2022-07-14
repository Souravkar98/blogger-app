import express from "express";
import { addBlogs, deleteblog, getAllBlog, getById, getByUserId, updateBlog } from "../controller/blog.js";

const blogRouter = express.Router();

blogRouter.get('/' , getAllBlog);
blogRouter.post('/add' , addBlogs)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get('/:id' , getById)
blogRouter.delete('/:id' , deleteblog)
blogRouter.get('/user/:id', getByUserId)

export default blogRouter;