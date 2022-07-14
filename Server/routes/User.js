import express from "express";
import { getAllUser, logIn, signUp } from "../controller/user.js";

const router = express.Router();

router.get('/', getAllUser);
router.post('/signup' , signUp)
router.post('/login' , logIn )

export default router