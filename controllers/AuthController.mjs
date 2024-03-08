import User from "../models/User.mjs"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user)
    }
    catch (error) {
        res.status(400).json(error);
    }
}

const login = async (req, res) => { 
    const user = await User.findOne({ email: req.body.email });
    if (!user) { 
        return res.status(404).json({
            status: 'error',
            message: 'User Not Found'
        })
    }

    const matchPassword = await bcrypt.compare(req.body.password, user.password)
    if (!matchPassword) { 
        return res.status(404).json({
            status: 'error',
            message: 'Password Incorrect'
        })
    }

    const token = jwt.sign(
        { userId: user._id },
        'Random',
        {expiresIn: "24h"}
    )

    res.json({
        token,
        user
    })
}

const getAuthUser = async (req, res) => { 
    const { userId } = req.user;
    const user = await User.findById(userId);
    if (!user) { 
        return res.status(404).json({
            status: 'error',
            message: 'User Not Found'
        })
    }
    res.json(user);
}

export default { register, login, getAuthUser };

