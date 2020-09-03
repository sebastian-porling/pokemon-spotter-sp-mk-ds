const admin = require('firebase-admin');
var serviceAccount = require("../permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-9a206..firebaseio.com"
});
const db = admin.firestore();

module.exports.spot = async (user_id, pokemon) => {
    try {
        let document = db.collection('users').doc(`/${user_id}/`).get();
        const user = document.data();
        await document.update(
                {
                    ...user,
                    pokemons: [...pokemons.filter(p => p.id !== pokemon.id), pokemon]
                }
                );
        document = await db.collection('pokemon').doc(`/${pokemon.id}/`).get();
        pokemon = document.data();
        pokemon.spotted++;
        await document.update({pokemon})
        return 200;
      } catch (error) {
        console.log(error);
        return 500;
      }
};

module.exports.createUser = async (user) => {
    try {
        const newuser = await admin.auth().createUser({
            email: user.email,
            password: user.password,
            displayName: user.username,
            photoURL: user.profile
          }).catch(err => console.log(err))
        console.log(newuser)
        return newuser;
    } catch (error) {
        throw error.errorInfo;
    }
}


module.exports.userExists = (user) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports.getAllPokemon = async () => {
    try {
        let snapshot = await db.collection('pokemon').get()
        const pokemon = snapshot.docs.map(doc => doc.data());
        return pokemon;
    } catch (error) {
        throw error;
    }
}

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
