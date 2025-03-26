const Sequelize = require("sequelize")
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})