# :mouse: :eyeglasses: Pokemon Spotter

This solution is made by Sebastian Porling, Mehtab Kayani and David Stjernqvist.

## :heavy_check_mark: Heroku

Our solution can be found on this heroku link:

[https://pokemon-spotter-sp-mk-ds.herokuapp.com/](https://pokemon-spotter-sp-mk-ds.herokuapp.com/).

## :boom: Project, install, run, compile and deploy

This project utilizes Angular for frontend, express for backend and firebase for authentication and database.
You have to run `npm i` in the frontend and backend directories. To run in developer mode: open two terminals and run `npm run serve` in frontend and `npm run dev` on backend.

To compile and deploy run `ng build --prod` in frontend and `npm run build` in the backend folder. You can use the dockerfile to deploy the container.

## :question: Motivation

This project is utilizing angular, express/node.js and firebase as it main tools. Angular for everything frontend related. Express/node.js for the backend api, which loads data from firebase. Firebase is used in both frontend and backend. For frontend we use it for authentication and authorization. It is really easy to check if we have a current user on the webpage as well to register new users and handle data with firestore.

## :arrow_forward: Frontend

We have structured our project with **pages** which is a whole page completed with components, **services** which handles lots of business logic and fetching data, **models** which represents the objects of data we are using in the project e.g. users and pokemon. Lastly we use **components** which is what angular is mostly built upon. We have been trying to re-use the components as much as possible. The "**list**" of pokemon is used multiple times in the project. It displays the sprite of the pokemon and can switch between displaying the spotted counter or not. The "**map-box**" which is used both for displaying where all spotted pokemon are located and it is used for choosing the location for where you have spotted a pokemon. The "**ranking-list**" component is used both for displaying top-ten users and all users.

Pages and their functions:

|page|endpoint|functionality|
|----|----|----|
|home|/|Here can anyone see the top ten players and all pokemon and how many times they've been spotted|
|user page|/userstartpage|Here the logged in user can see their top 10 rarest pokemon, all spotted pokemon and all missing pokemon|
|register|/register|This is were we are redirected from gitlab when someone have pressed the signup button|
|pokemon|/pokemon|Displays all spotted pokemon on a map and lists all pokemon and displays how many times they've been spotted|
|ranking|/ranking|Displays top 10 users and all other users and their scores|
|add spotted|/addspottedpokemon|Prompts the user to add a pokemon|

## :arrow_backward: Backend

The backend utilizes firebase firestore for storing all the data. We have the tables **pokemon** and **users**. The users table has information that looks like this:

```javascript
uid: string;
displayName: string;
photoURL: string;
score: number;
found_pokemon: [
    {
        id: number;
        name: string;
        sprite: string;
        gender: string;
        latitude: number;
        longitude: number;
        shiny: boolean;
    }
];
```

The **uid** is created by firebase when creating a new user. This is a long unique string. We store information about the gender, shiny and coordinates of the pokemon at the user. Because they are closely related to the user.

The pokemon table on the other hand looks like this:

```javascript
id: number;
name: string;
sprite: string;
spotted: number;
genders: {
    male: boolean;
    female: boolean;
    genderless: boolean;
};
```

All of this data is gathered through the pokeapi. We gather all of this information with the script [generatePokemonData.js](./backend/scripts/generatePokemonData.js). We take in information about all the pokemon and then gather information about what genders they can take and add that information to the object. The id represents the actual pokemon number. The spotted field is what we increment to see how many times it have been spotted by other users.

Api endpoints and functions:

|endpoint|method|functionality|
|----|----|----|
|/|GET|Returns the frontend|
|/auth/signup|GET|Redirects the user to gitlab oauth|
|/auth/signupGit|GET|Handles the gitlab data, returns it as a cookie to /register|
|/auth/register|POST|Takes in the user and creates it in firebase and creates a user table document with information about score and found pokemon|
|/api/pokemon|GET|Fetches all pokemon from firestore|
|/api/pokemon/:id|GET|Fetches pokemon by id from firestore|
|/spot|POST|Adds a spotted pokemon to the user and increments the spotted counter in the pokemons table|
|/users|GET|Fetches all users|
|/user/:id|GET|Fetches user by id|
|/top-ten|GET|Fetches the top ten users by score|