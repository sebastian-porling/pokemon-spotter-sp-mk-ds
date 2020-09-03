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
        document.update({
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

/**
 * 
 */
module.exports.getAllPokemon = async () => {
    try {
        let snapshot = await db.collection('pokemon').get()
        const pokemon = snapshot.docs.map(doc => doc.data());
        return pokemon;
    } catch (error) {
        throw error;
    }
}

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
