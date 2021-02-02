import User from '../models/User'

const checkDuplicateEmail = async (req,res,next) => {
    try {
        const email = await User.findOne({ email:req.body.email});

        if(email)
            return res.status(400).json({ message:"Email ya está tomado."});
        
        next();
    } catch (error) {
        res.status(500).json({message: error});
    }
};

export { checkDuplicateEmail};