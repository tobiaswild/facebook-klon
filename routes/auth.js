const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User");

// Default
router.get("/", (req, res) => {
    res.status(200).send("Registrierung");
});

// Benutzer Speichern
router.post("/register", async (req, res) => {
    try {
        // Neuen Benutzer definieren
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            desc: req.body.desc,
        });
        // Benutzer speichern in der MongoDB
        const user = await newUser.save();
        // Response senden
        res.status(200).send("Nutzer angelegt");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login

module.exports = router;