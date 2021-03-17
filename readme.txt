/*dependencies*/
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn add ts-node-dev -D  // convert code yo typescript
yarn add uuid
yarn add @types/uuid -D
yarn add jest @types/jest -D
yarn add ts-test -D
yarn add supertest @types/supertest -D
yarn add nodemailer 
yarn add @types/nodemailer -D
yarn add handlebars
yarn add yup
yarn add express-async-errors


/*initialize script*/
yarn tsc --init
/*alter to false - archive: tsconfig.json*/
"strict": true,   /* Enable all strict type-checking options. */

/*to initialise server*/
add on package.json
  "scripts":
  {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
    "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
  },

/*typeorm*/
yarn add typeorm reflect-metadata

/*sqlite*/
yarn add sqlite3

  /* http methods
  GET => to find any data
  POST => to save any data
  PUT => to update any data
  DELETE => to delete any data
  PATCH => to update specify value on a data
  */

/*VS CODE
If use SQLITE, install extension: SQLite (alexcvzz)
*/

/*tests with jest*/
yarn jest --init

/*in file jest.config.ts*/
bail: true
/*if one test failed, stop it*/

/*files for test*/
   testMatch: [
     "**/__tests__/*.test.ts",
   ],

preset: "ts-jest",


