const admin = require('firebase-admin');
var serviceAccount = require("../permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-ldsgw@pokemon-spotter.iam.gserviceaccount.com"
});
const db = admin.firestore();

/**
 * 
 * @param {*} user_id 
 * @param {*} pokemon 
 */
module.exports.spot = async (user_id, pokemon) => {
    try {
        let document = db.collection('users').doc(`/${user_id}/`);
        let snapshot = await document.get();
        const user = snapshot.data();
        const newScore = await calculateNewScore(pokemon, user);
        document.update({
            score: newScore,
            found_pokemon: [...user.found_pokemon.filter(p => p.id !== pokemon.id), pokemon]
        }).then(async _ => {
            document = db.collection('pokemon').doc(`/${pokemon.id}/`);
            snapshot = await document.get();
            pokemon = snapshot.data();
            pokemon.spotted++;
            await document.update(pokemon)
        });
        return 200;
      } catch (error) {
        throw error;
      }
};

const getRareIndex = (pokemon_id) => (pokemon) => pokemon.id === pokemon_id; 
const calculateNewScore = async (pokemon, user) => {
    try {
        const allPokemon = await getAllPokemon();
        const rareIndex = allPokemon.findIndex(getRareIndex(pokemon.id));
        console.log(pokemon.shiny)
        const shinyScore = pokemon.shiny ? 1000 : 0;
        const score = rareIndex * 100 + 100 + shinyScore + user.score;
        return score;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/**
 * 
 * @param {*} user 
 */
module.exports.createUser = async (user) => {
    try {
        const newUser = await admin.auth().createUser({
            email: user.email,
            password: user.password,
            displayName: user.displayName,
            photoURL: user.photoURL
        });
        const {displayName, photoURL, uid} = newUser;
        db.collection('users').doc(uid).create({
            uid,
            displayName,
            photoURL,
            score: 0,
            found_pokemon: []
        });
        return newUser;
    } catch (error) {
        throw error.errorInfo;
    }
}

/**
 * 
 */
module.exports.getUsers = async () => {
    try {
        let snapshot = await db.collection('users').get()
        const users = snapshot.docs.map(doc => doc.data());
        return users;
    } catch (error) {
        throw error;
    }
}

module.exports.getTopTenUsers = async () => {
    try {
        const usersRef = db.collection('users');
        let snapshot = await usersRef.orderBy('score').limit(10).get();
        const topTenUsers = snapshot.docs.map(doc => doc.data());
        return topTenUsers;
    } catch (error) {
        throw error;
    }
}

/**
 * 
 */
const getAllPokemon = async () => {
    try {
        let snapshot = await db.collection('pokemon').orderBy("spotted", "desc").get()
        const pokemon = snapshot.docs.map(doc => doc.data());
        return pokemon;
    } catch (error) {
        throw error;
    }
}
module.exports.getAllPokemon = getAllPokemon;

/**
 * 
 * @param {*} pokemon_id 
 */
module.exports.getPokemon = async (pokemon_id) => {
    pokemon_id = 1;
    try {
        let document = await db.collection('pokemon').doc(`/${pokemon_id}/`).get();
        const pokemon = document.data();
        console.log(pokemon);
        return pokemon;
    } catch (error) {
        
    }
}
