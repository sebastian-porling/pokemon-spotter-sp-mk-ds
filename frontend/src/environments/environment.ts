// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD1B29SQXLJIqtbEHyOSlvVy2QDL9YjH3Q',
    authDomain: 'pokemon-spotter.firebaseapp.com',
    databaseURL: 'https://pokemon-spotter.firebaseio.com',
    projectId: 'pokemon-spotter',
    storageBucket: 'pokemon-spotter.appspot.com',
    messagingSenderId: '877105547164',
    appId: '1:877105547164:web:ac0a6455c3ee285de86a59',
    measurementId: 'G-X5Y9XWL7PL'
  },
  apiUrl: 'http://localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
