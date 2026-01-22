const User = require('../models/authModel.js')
const {generateToken} = require('../utils/token.js')
const bcrypt = require('bcryptjs')
const sendTokenCookie = require('../utils/sendTokenCookie.js')


const registerUser = async(req, res) => {
    // take inputs
    // check if important things are there
    // check if email exist
    // check if username exist
    // save and return json
    // pw regex imp
    try{
        const {username, email, password, name} = req.body

        if(!username){
            return res.status(400).json({message: "Please Enter username!"})
        }else if(!email){
            return res.status(400).json({message: "Please enter email!"})
        }else if(!password){
            return res.status(400).json({message: "Please enter password!"})
        }
        else if(!name){
            return res.status(400).json({message: "Please enter name!"})
        }

        if (password) {
            if (password.length <= 6) {
                return res.status(400).json({
                message: "Password must be greater than 6"
                });
            }

            if (password.length >= 20) {
                return res.status(400).json({
                message: "Password must be smaller than 20"
                });
            }

            if (!/[a-z]/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one lowercase letter"
                });
            }

            if (!/[A-Z]/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one uppercase letter"
                });
            }

            if (!/\d/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one number"
                });
            }

            if (!/[@$!%*?&#^_+\-=]/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one special character"
                });
            }
        }


        const existEmail = await User.findOne({email})
        const existUserName = await User.findOne({username})
        if(existEmail){
            return res.status(400).json({message: "This email already in use!"})
        }else if(existUserName){
            return res.status(400).json({message: "This username is taken"})
        }

    
        const user = await User.create({username, email, password, name})
        const token = generateToken(user._id)
        sendTokenCookie(res, token)
        return res.status(200).json({
            message: 'user created successfully',
            user: {
                username: user.username,
                email: user.email,
                Id: user._id,
                name: user.name
            }
        })

    }catch(error){
        console.log('error in registration', error)
        return res.status(400).json({message: "error in registration"})
    }
}

const loginUser = async(req, res) => {
    // take email/username as identifier, password
    // check if both input is filled 
    // find user by email/userName
    // return error if user not found (exist user)
    // compare password
    // return if password not matched saying "password is wrong"
    // return json

    try{
        const {userNameEmail, password} = req.body
        if(!userNameEmail){
            return res.status(400).json({message: "Please fill email or username"})
        }else if(!password){
            return res.status(400).json({message: "Please fill the passowrd"})
        }

        

        const user = await User.findOne({
            $or: [
                {email: userNameEmail.toLowerCase()},
                {username: userNameEmail}
            ]
        })
        if(!user){
            return res.status(400).json({message: "User not found"})
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).json({message: "Password is wrong"})
        }

        const token = generateToken(user._id)
        sendTokenCookie(res, token)
        return res.status(200).json({
            message: "login successful",
            user: {
                username: user.username,
                email: user.email,
                Id: user._id,
                name: user.name
            }
        })
    }catch(error){
        console.log("login failed", error)
        return res.status(400).json({message: "login failed"})
    }

}

const updateUser = async(req, res) => {
    // take input (email, username, password)
    // check if user/password present or not
    // regex check for password because it didnot worked in model
    // get looged in user from database (by middleware)
    // return if user not found in db
    // save whatever data is given in input
    // update
    // return json
    try{
        const {email, username, name, password} = req.body



        if(!email && !username && !name && !password){
            return res.status(400).json({message: "Please fill atlest one field to update"})
        }

        if (password) {
            if (password.length <= 6) {
                return res.status(400).json({
                message: "Password must be greater than 6"
                });
            }

            if (password.length >= 20) {
                return res.status(400).json({
                message: "Password must be smaller than 20"
                });
            }

            if (!/[a-z]/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one lowercase letter"
                });
            }

            if (!/[A-Z]/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one uppercase letter"
                });
            }

            if (!/\d/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one number"
                });
            }

            if (!/[@$!%*?&#^_+\-=]/.test(password)) {
                return res.status(400).json({
                message: "Password must contain at least one special character"
                });
            }
        }

        const user = await User.findById(req.user._id)
        if(!user){
            return res.status(400).json({message: "User not found"})
        }

        if (username && username !== user.username) {
            const exists = await User.findOne({ username });
            if (exists) {
                return res.status(400).json({
                    message: "Username already taken"
                });
            }
        }
        if(username) user.username = username;
        if(email) user.email = email
        if(name) user.name = name
        if(password) user.password = password

        const userUpdate = await user.save()
        return res.status(200).json({
            message: "user updated successfully",
            user: {
                _id: userUpdate._id,
                username: userUpdate.username,
                email: userUpdate.email,
                name: userUpdate.name
            }
        })
    }catch(error){
        console.log("error in update", error)
        return res.status(400).json({message: "Error while updating, Please try again later"})
    }

}


const deleteUser = async(req, res) => {
    // get user from middleware
    // return if user not found
    // get password
    // check if password matched
    // delete user and return json for frontend
    // user will be deleted after 30 days if not logged in, deletion cancel if logged in(later)

    const {password} = req.body
    if(!password){
        return res.status(400).json({message: "Please enter Password"})
    }

    try{
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(400).json({message: 'You are not authorized to delete this user'})
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).json({message: "Password is wrong"})
        }

        await user.deleteOne()
        return res.status(200).json({message: 'User deleted successfully'})
    }catch(error){
        console.error('Error during user deletion', error)
        res.status(500).json({message: 'error while deleting'})
    }
}

const getUser = async(req, res) => {
    try{
        // get user from db by middleware
        const user = await User.findById(req.user._id)
        if(!user){
            return res.status(400).json({message: "User not found"})
        }

        return res.status(200).json({
            message: "Fetched user data successfully",
            user: {
                username: user.username,
                name: user.name,
                email: user.email,
                id: user._id
            }
        })

    }catch(error){
        console.log("not able to get user data", error)
        return res.status(200).json({message: "Not able to fetch user data"})
    }
}

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error", error);
    return res.status(500).json({
      message: "Logout failed",
    });
  }
};




module.exports = {registerUser, loginUser, updateUser, deleteUser, getUser, logoutUser }