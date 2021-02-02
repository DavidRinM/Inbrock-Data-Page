import User from '../models/User'

import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
    let errors = [];
    
    try {
        //Getting the Request Body
        const { name, last_name, email, password } = req.body;

        const newUser = new User({
            name,
            last_name,
            email,
            password: await User.encryptPassword(password)
        });

        //Saving the user object in MongoDB
        const savedUser = await newUser.save();

        //Create a token
        const token = jwt.sign({ id: savedUser._id}, config.SECRET, {
            expiresIn: 86400, //24 hrs
        });

        return res.status(200).json({token});

    } catch(error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


export const signIn = async (req, res) => {
    try {
        //Request body email
        const userFound = await User.findOne({ email: req.body.email });

        if(!userFound)
            return res.status(400).json({ message: "Usuario no encontrado"});

        const matchedPassword = await User.comparePassword(
            req.body.password,
            userFound.password
        )

        if(!matchedPassword)
            return res.status(401).json({
                token: null,
                message: "Contraseña inválida"
            });
        
        const token = jwt.sign({ id: userFound._id}, config.SECRET, {
            expiresIn:86400, //24 hrs
        });

        res.json({token});
    } catch (error) {
        console.log(error);
    }
};