# node-api

API haas been devlopment on NLW4.

--> Guide
/_dependencies_/
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn add ts-node-dev -D // convert code yo typescript
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

/_initialize script_/
yarn tsc --init
/_alter to false - archive: tsconfig.json_/
"strict": true, /_ Enable all strict type-checking options. _/

/_to initialise server_/
add on package.json
"scripts":
{
"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
"typeorm": "ts-node-dev node_modules/typeorm/cli.js"
},

/_typeorm_/
yarn add typeorm reflect-metadata

/_sqlite_/
yarn add sqlite3

/_ http methods
GET => to find any data
POST => to save any data
PUT => to update any data
DELETE => to delete any data
PATCH => to update specify value on a data
_/

/_VS CODE
If use SQLITE, install extension: SQLite (alexcvzz)
_/

/_tests with jest_/
yarn jest --init

/_in file jest.config.ts_/
bail: true
/_if one test failed, stop it_/

/_files for test_/
testMatch: [
"**/__tests__/*.test.ts",
],

preset: "ts-jest",
