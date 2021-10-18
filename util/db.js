// Bibliotheken
const mongoose = require("mongoose");

// Datenbankverbindung
const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://admin:XkyKvR0lHop8lbm7@cluster0.jrthp.mongodb.net/facebook-klon-DB?retryWrites=true&w=majority",
        {
            useNewUrlparser: true,
            useUnifiedTopology: true
        },
        () => {
            console.log("MongoDB Verbindung aufgebaut");
        }
    )
}

// Exportieren
module.exports = connectDB;