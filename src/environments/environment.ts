// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyBw33SqSNY5HgXQOuasm7fpcq0eIi72F9c",
       authDomain: "oshop-7aed0.firebaseapp.com",
       databaseURL: "https://oshop-7aed0.firebaseio.com",
       projectId: "oshop-7aed0",
       storageBucket: "oshop-7aed0.appspot.com",
       messagingSenderId: "985673709870"
  }
};
