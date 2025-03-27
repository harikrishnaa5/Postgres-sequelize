const Sequelize = require("sequelize");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
};

module.exports = connectDB;
