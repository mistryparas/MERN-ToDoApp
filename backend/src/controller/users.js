const User = require("../models/user");
const generateTokenPair = require("../helpers/tokenHelper").generateTokenPair;
const verifyRefreshToken = require("../helpers/tokenHelper").verifyRefreshToken;


const generateToken = async (req, res) => {
    try {
        req.checkBody("email", "Invalid username").notEmpty();
        req.checkBody("password", "Invalid password").notEmpty();
        let errors = req.validationErrors();
        if (errors) return res.status(401).json({ "message": "Invalid credentials", "errors": errors });
        let user = await User.findOne({ "email": req.body.email.toLowerCase(), "status": "active" }).exec();
        if (user === null) return res.status(401).json({ "message": "You have entered a wrong email. Please check and try again." });
        let success = await user.comparePassword(req.body.password);
        if (success === false) return res.status(401).json({ "message": "You have entered a wrong password." });
        let { access_token, refresh_token } = generateTokenPair(user);
        return res.status(200).json({
            access_token: access_token,
            refresh_token: refresh_token
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "An error occured", "errors": err });
    }
}

const refreshToken = async (req, res) => {
    try{
        const refreshToken = req.body.refresh_token;
        if(!refreshToken) return res.status(401).json({message: "Bad Request"});
        let userId = await verifyRefreshToken(refreshToken);
        let user = await User.findOne( {
            id: userId
        }).exec();
        let { access_token, refresh_token } = generateTokenPair(user);
        return res.status(200).json({
            access_token: access_token,
            refresh_token: refresh_token
        });
    }catch(err){
        console.log("Error occured while refrehing the token", err)
        return res.status(500).json({ "message": "An error occured", "errors": err });
    }
}

const signup = async (req, res) => {
    try{
        req.checkBody("email", "Email can not be empty").notEmpty();
        req.checkBody("email", "Invalid email. Please check the email entered").isEmail();
        req.checkBody("password", "Password can not be empty").notEmpty();
        req.checkBody("firstName", "First Name can not be empty").notEmpty();
        req.checkBody("lastName", "Last Name can not be empty").notEmpty();

        let errors = req.validationErrors();
        if (errors) return res.status(401).json({ "message": "Invalid credentials", "errors": errors });
        let email = req.body.email.toLowerCase();

        let user = await User.findOne({ "email": email}).exec();
        if (user) return res.status(400).json({ "message": "User already exist" });
        let newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: email, 
            password: req.body.password
        });

        // TriggerEmail({
        //     eventName: "new_signup",
        //     params: {
        //         name: req.body.name || req.body.email
        //     },
        //     to: req.body.email
        // })

        let { access_token, refresh_token } = generateTokenPair(newUser);
        return res.status(200).json({
            access_token: access_token,
            refresh_token: refresh_token
        });

    }catch(err) {
        console.log(err)
        res.status(500).json({ "message": "An error occured", "errors": err });
    }
}

const getUser = async (req, res, next) => {
    try{
        const u = req.user;
        const user = await User.findOne({_id: u.id}).exec();
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({"message": String(err)});
    }
}

module.exports = {generateToken, refreshToken, signup, getUser}