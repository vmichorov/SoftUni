const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config/index')

function init() {
    return function (req, res, next) {
        if (parseToken(req, res)) {
            req.auth = {
                async register(username, password) {
                    const token = await register(username, password);
                    res.cookie(COOKIE_NAME, token);
                },
                async login(username, password) {
                    const token = await login(username, password);
                    res.cookie(COOKIE_NAME, token);
                },
                logout() {
                    res.clearCookie(COOKIE_NAME);
                }
            };
        }
        next();
    }
}

module.exports = init;

async function register(username, password) {
    const existing = await userService.getUserByUsername(username);
    if (existing) {
        throw new Error('Username already taken');
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, hashedPass);

    return genToken(user);
}

async function login(username, password) {
    const user = await userService.getUserByUsername(username);
    if (!user) {
        throw new Error('User does not exist');
    }
    const hasMatch = await bcrypt.compare(password, user.hashedPass);
    if (!hasMatch) {
        throw new Error('Incorrect password');
    }

    return genToken(user);
}

function genToken(userData) {
    return jwt.sign({
        _id: userData._id,
        username: userData.username
    }, TOKEN_SECRET);
}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];
    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            res.redirect('/auth/login');
            return false;
        }
    }
    return true;
}