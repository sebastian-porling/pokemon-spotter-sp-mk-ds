const express = require('express');
const apiRouter = express.Router();
const db = require('../integration');
const {isAuthenticated} = require('../middleware');

/**
 * Fetches all pokemon
 */
apiRouter.get("/pokemon", async (_, res) => {
    try {
        const pokemon = await db.getAllPokemon();
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({msg: "Couldn't load pokemon!", error})
    }
})

/**
 * Fetches pokemon by id
 */
apiRouter.get('/pokemon/:id', async (req, res) => {
    const pokemon_id = req.params.id;
    try {
        const pokemon = await db.getPokemon(pokemon_id);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({msg: "Couldn't find pokemon!", error})
    }
})

/**
 * Adds a spotted pokemon to a user
 */
apiRouter.post("/spot", async (req, res) => {
    const {user_id, pokemon} = req.body;
    try {
        await db.spot(user_id, pokemon);
        res.status(201).json({msg: "Created"});
    } catch (error) {
        res.status(400).send({msg: "User or pokemon doesn't exist", error});
    }
})

/**
 * Fetches all users
 */
apiRouter.get('/users', async (_, res) => {
    try {
        const users = await db.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({msg: "Couldn't load users!", error})
    }
})

/**
 * Fetches user by id
 */
apiRouter.get('/user/:id', async (req, res) => {
    try {
        const user = await db.getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({msg: "User not found", error})
    }
})

/**
 * Fetches top-ten users
 */
apiRouter.get('/top-ten', async (_, res) => {
    try {
        const topTenUsers = await db.getTopTenUsers();
        res.status(200).json(topTenUsers);
    } catch (error) {
        res.status(400).json({msg: "Couldn't load top ten", error})
    }
})

/**
 * 404
 */
apiRouter.get('*', (_, res) => {
    res.status(404).json({msg: "This path isn't implemented"})
})

module.exports = apiRouter;
 