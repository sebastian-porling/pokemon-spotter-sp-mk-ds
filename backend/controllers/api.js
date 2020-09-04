const express = require('express');
const apiRouter = express.Router();
const db = require('../integration');

/**
 * 
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
 * 
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
 * 
 */
apiRouter.post("/spot", async (req, res) => {
    const {user_id, pokemon} = req.body;
    try {
        await db.spot(user_id, pokemon);
        res.sendStatus(201);
    } catch (error) {
        res.status(400).send({msg: "User or pokemon doesn't exist", error});
    }
})

/**
 * 
 */
apiRouter.get('/users', async (req, res) => {
    try {
        const users = await db.getUsers();
        res.status(200).json(users);
    } catch (error) {
        es.status(400).json({msg: "Couldn't load users!", error})
    }
})

/**
 * 
 */
apiRouter.get('*', (_, res) => {
    res.status(404).json({msg: "This path isn't implemented"})
})

module.exports = apiRouter;
 