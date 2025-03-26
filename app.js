const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const db = require("./config/database");

const connectDB = async () => {
    try {
        await db.authenticate();
        console.log("Database connected");
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
};

connectDB();

//middlewares
app.use(express.json());

//routes
app.use("/todo", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
