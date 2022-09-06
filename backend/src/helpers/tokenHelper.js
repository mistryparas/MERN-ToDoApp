const jwt = require('jsonwebtoken');

const generateTokenPair = (user) => {
    if(!user) return false;
    let tokenPair = {
        access_token: generateAccessToken(user),
        refresh_token: generateRefreshToken(user)
    }
    // updateTokenRegister(user.id, tokenPair);
    return tokenPair;
}

const verifyRefreshToken = (refresh_token) => {
    return new Promise((res, rej) => {
        jwt.verify(refresh_token, process.env.REFRESH_SECRET, (err, payload) => {
            if(err) return rej(err);
            const userId = payload.id;
            // if(isTokenRevoked({userId, token: refresh_token, token_type: "refresh_token"}))
            //     return rej("Invalid refresh token");
            res(userId);
        })
    })
}

const verifyAccessToken = (access_token) => {
    return new Promise((res, rej) => {
        jwt.verify(access_token, process.env.JWT_SECRET, (err, payload) => {
            if(err) return rej(err);
            const userId = payload.id;
            // if(isTokenRevoked({userId, token: access_token, token_type: "access_token"}))
            //     return rej("Invalid access token");
            res(userId);
        })
    })
}

const generateAccessToken = (user) => {
    // let expires = moment().utc().add({ minutes : process.env.TOKEN_EXPIRE_IN_MINS }).unix();
    console.log(process.env.JWT_SECRET);
    let token = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
    

    return token;
}

const generateRefreshToken = (user) => {
    // let expires = moment().utc().add({ hours: process.env.REFRESH_TOKEN_EXPIRE_IN_HOURS }).unix();
    let token = jwt.sign({
        id: user.id,
        email: user.email,
        type: "refresh"
    }, process.env.REFRESH_SECRET,  { expiresIn: '24h' });

    return token;
}

module.exports = {generateTokenPair, verifyRefreshToken, verifyAccessToken}