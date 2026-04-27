const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/cursos", require("./routes/cursoRoutes"));

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Conectado a MongoDB");

    app.listen(process.env.PORT, () => {
        console.log("Servidor corriendo en puerto " + process.env.PORT);
    });
})
.catch(err => console.log(err));