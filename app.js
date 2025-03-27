const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectDB = require("./config/database");

//middlewares
app.use(express.json());

//routes
app.use("/todo", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

connectDB();
