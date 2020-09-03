const express = require('express');
const apiRouter = express.Router();
const db = require('../integration');

apiRouter.get("/pokemon", async (_, res) => {
    console.log("in api")
    try {
        const pokemon = await db.getPokemon();
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({msg: "Couldn't load pokemon!"})
    }
})

apiRouter.post("/spot", async (req, res) => {
    const {user, pokemon} = req.body;
    try {
        await db.spot(user, pokemon);
        res.sendStatus(201);
    } catch (error) {
        res.status(400).send({msg: "User or pokemon doesn't exist"});
    }
})

module.exports = apiRouter;
