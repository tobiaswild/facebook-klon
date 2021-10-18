// Bibliotheken
const express = require("express");
const connectDB = require("./util/db");
const authRouter = require("./routes/auth");

// Serverinstanz
const app = express();

// Datenbankverbindung
connectDB();

// Port
const port = 8080;

// Middleware
app.use(express.json());

// Routing
app.get("/", (req, res) => {
    res.send("Willkommen zu dem Facebook Klon");
});

app.use("/auth", authRouter);

// Listener
app.listen(port, (req, res) => {
    console.log("Der Server läuft auf Port: " + port);
});