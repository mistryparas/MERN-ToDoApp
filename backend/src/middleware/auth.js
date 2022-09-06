const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const verifyAccessToken = require("../helpers/tokenHelper").verifyAccessToken;
const User = require("../models/user");

class Auth {
    initialize(){
        passport.use("jwt", this.getStrategy());
        return passport.initialize();
    }
    
    authenticate = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);

    getStrategy = () => {
        const params = {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("bearer"),
            passReqToCallback: true
        };

        return new Strategy(params, async (req, payload, done) => {
            try{
                let user = await User.findOne({ "email": payload.email }).exec();

                if (user === null) {
                    return done(null, false, { message: "The user in the token was not found" });
                }

                let token = req.headers && req.headers.authorization || req.headers.Authorization;
                if(token.includes("bearer") || token.includes("Bearer"))
                    token = token.replace(/Bearer\s+/, "")
                await verifyAccessToken(token);
                return done(null, { id: user.id, email: user.email, role: user.role, name: user.name || user.first_name });
            }catch(err){
                return done(null, false, {message: err.message || err});
            }
        });
    }
}

module.exports = new Auth();