const express = require('express');
const authRouter = express.Router();
const db = require('../integration');
const axios = require('axios');

const auth_config = {
    redirect_uri: 'http://localhost:3000/auth/loginGit',
    client_id: '014e6cb338a44b0a7439f3505e65775eb6016cb6b19589e324cfb14ffc4ba620',
    client_secret: '069554bc3719ecedcf6e3de9ef5c4beee540ca7f35b0929bad683774e69752d6',
    scope: 'read_user openid profile email', 
    response_type: 'code',
    state: "test123"
}

/**
 * 
 */
authRouter.post('/register', async (req, res) => {
    const user = req.body;
    try {
        const result = await db.createUser(user);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send({msg: error});
    }
    
})

/**
 * 
 */
authRouter.get('/signup', (req, res) => {
    res.redirect(`https://gitlab.com/oauth/authorize?${new URLSearchParams(auth_config).toString()}`)
})

/**
 * 
 */
authRouter.get('/signupGit', async (req, res) => {
    try {
        const obj = {
            client_id: auth_config.client_id,
            client_secret: auth_config.client_secret,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: auth_config.redirect_uri
        }
        let result = await axios.post(`https://gitlab.com/oauth/token?${new URLSearchParams(obj).toString()}`);
        result = await axios.get(`https://gitlab.com/api/v4/user?access_token=${result.data.access_token}`);
        const gitlab_acc = result.data;
        res.cookie('gitlab', JSON.stringify(gitlab_acc));
        res.redirect('http://localhost:4200/register');
    } catch (error) {
        res.status(500).json({msg: error});
    }
})

/**
 * 
 */
authRouter.get('*', (_, res) => {
    res.status(404).json({msg: "This page doesn't exist"});
})

module.exports = authRouter;
