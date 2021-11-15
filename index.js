require('dotenv').config()
const Sequilize = require('sequelize');
const DB_HOST = process.env.DB_HOST;
const DB_CONNECTION = process.env.DB_CONNECTION;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;


/* DB a fost facuta pe serverul local */
const sequilize = new Sequilize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    dialect: DB_CONNECTION,
    host: DB_HOST
});

const Student = require('./Student')(sequilize);

module.exports = {
    sequilize: sequilize,
    content: Student
}