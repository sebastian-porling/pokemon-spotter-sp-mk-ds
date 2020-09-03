const axios = require('axios');
const API_URL = 'https://pokeapi.co/api/v2'
const admin = require('firebase-admin');
var serviceAccount = require("../permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-ldsgw@pokemon-spotter.iam.gserviceaccount.com"
});
const db = admin.firestore();

/**
 * 
 */
async function main() {
    response = await axios(`${API_URL}/pokemon?limit=151`);
    let results = response.data.results;
    response = await axios(`${API_URL}/gender/male/`);
    const males = response.data;
    response = await axios(`${API_URL}/gender/female/`);
    const females = response.data;
    response = await axios(`${API_URL}/gender/genderless/`);
    const genderless = response.data;
    let pokemon_array = [];
    id = 1;
    await Promise.all(
        results.map(async poke => {
            try {
                response = await axios(poke.url)
            } catch (error) {
                console.log(error)
            }
            const pokemon = response.data;
            const checkName = (n) => n.pokemon_species.name === pokemon.name;
            pokemon_array.push(
                {
                    id: pokemon.id, 
                    name: pokemon.name, 
                    sprite: pokemon.sprites['front_default'],
                    genders: {
                        male: males.pokemon_species_details.some(checkName),
                        female: females.pokemon_species_details.some(checkName),
                        genderless: genderless.pokemon_species_details.some(checkName)
                    },
                    spotted: 0
                }
            )
        })
    );
    for (const p of pokemon_array) {
        (async () => {
            try {
              await db.collection('pokemon').doc('/' + p.id + '/')
                  .create(p);
            } catch (error) {
              console.log(error);
            }
          })();
    }
    
}


main();



