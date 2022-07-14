
import User from "../model/User.js";
import bycrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find()

    } catch (error) {
        console.log(error)
    }
    if (!users) {
        return res.status(404).json({ message: "no user found" })
    }
    return res.status(200).json({ users })

}

export const signUp = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUSer;

    try {
        existingUSer = await User.findOne({ email })
    } catch (error) {
       return console.log(error)
    }

    if (existingUSer) {
        return res.status(400).json({ message: "user already present ! Please do SignUP" })
    }

    const hashedpassword = bycrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedpassword,
        blogs: []
    })

    try {
       await user.save()
    } catch (error) {
       return console.log(error)
    }

    return res.status(201).json({ user })
}

export const logIn = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUSer;

    try {
        existingUSer = await User.findOne({ email })
    } catch (error) {
        console.log(error)
    }

    if (!existingUSer) {
        return res.status(404).json({ message: "Could Not Find This User" })
    }

    const isPasswordCorrect = bycrypt.compareSync(password, existingUSer.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "wrong credential" })
    }
    return res.status(200).json({ message: "Login successfully", user : existingUSer})





}