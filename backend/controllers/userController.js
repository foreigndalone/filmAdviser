const userModel = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const signUpUser = async(req, res) => {
    const {password, email} = req.body
    
    try{
        const isExist = await userModel.getUserByMail(email)
        if(isExist){
            return res.status(409).json({ message: "User already exists" })
        }
        const user = await userModel.createUser(password, email)
        return res.status(201).json({
            message: 'User registrated successfuly',
            user
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'internal server error'})
    }
}
const loginUpUser = async(req, res) => {
    const {email, password} = req.body
    try{
        const user = await userModel.getUserByMail(email)
        if(!user){
            return res.status(401).json({ message: "Wrong password or email" })
        }
        const match = await bcrypt.compare(password, user.password)
          if (!match) {
            return res.status(401).json({ message: "Wrong password" });
        }
        const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
        const accessToken = jwt.sign(
            {userId: user.id, email: user.email},
            ACCESS_TOKEN_SECRET,
            {expiresIn: "60s"}
        )
        res.cookie('token', accessToken, {
            maxAge: 60 * 1000,
            httpOnly: true
        })

        return res.status(200).json({
            message: 'Login successfuly',
            user: {userId: user.id, email: user.email, userStatus: 'active'},
            token: accessToken
        })

    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "server error" });
    }
}
const getAllUsers = async(req, res)=>{
    try{
        const users = await userModel.getUsers()
        res.json(users)
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "server error" });
    }
}
const logOutUser = async(req, res)=>{
    res.clearCookie("token")
    delete req.cookies["token"]
    req.user = null
    return res.status(200).json('LogOut successfuly')
}
const verifyAuth = async(req, res)=>{
    const {userId, email} = req.user
    const {ACCESS_TOKEN_SECRET} = process.env
    const newToken = jwt.sign({userId, email}, ACCESS_TOKEN_SECRET, {expiresIn: '60s'})
    res.cookie("token", newToken, {
        maxAge: 60* 1000,
        httpOnly: true
    })
    res.status(200).json({
        message: 'new token',
        user: {userId, email},
        token: newToken
    })

}
module.exports = {signUpUser, loginUpUser, getAllUsers, logOutUser, verifyAuth}