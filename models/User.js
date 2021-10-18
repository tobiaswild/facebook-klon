// Verbingung MongoDB und Server
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    // Benutzername
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 30,
    },
    // E-Mail
    email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
    },
    // Passwort
    password: {
        type: String,
        required: true,
        min: 8,
        max: 32,
    },
    // Profilbild
    profilePicture: {
        type: String,
        default: "",
    },
    // Coverbild
    coverPicture: {
        type: String,
        default: "",
    },
    // Followers
    followers: {
        type: Array,
        default: [],
    },
    // Following
    following: {
        type: Array,
        default: [],
    },
    // Beschreibung
    desc: {
        type: String,
        min: 10,
        max: 500,
    },
    // Stadt
    city: {
        type: String,
    },
    // Relationship
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
});

// Exportbefehl zur Nutzung in anderen Node.JS-Programmen
module.exports = mongoose.model("User", UserSchema);