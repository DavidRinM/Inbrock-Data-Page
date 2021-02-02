import User from '../models/User'

export const createUser = async (req, res) => {
    try {
        const { name, last_name, email, password} = req.body;

        const user = new User({
            name,
            last_name,
            email,
            password
        });

        //Encrypting users password
        user.password = await User.encryptPassword(user.password);

        //Saving user data
        const savedUser = await user.save();

        return res.status(200).json({
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email
        });
    } catch (error) {
        console.log(error);
    }
};

export const getUsers = async (req, res) => {};

export const getUser = async (req, res) => {};