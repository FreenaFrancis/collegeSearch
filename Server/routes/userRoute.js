const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Make sure to require 'bcrypt' for password hashing

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token is missing");
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json("Error with token");
            } else {
                if (decoded.role === "admin") {
                    next();
                } else {
                    return res.json("Not admin");
                }
            }
        });
    }
};

router.get('/admin', verifyUser, (req, res) => {
    res.json("Success");
});

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            userModel.create({ name, email, password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, role: user.role },
                            "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie('token', token);
                        return res.json({ Status: "Success", role: user.role });
                    } else {
                        return res.json("The password is incorrect");
                    }
                });
            } else {
                return res.json("No record existed");
            }
        });
});

router.get('/getallusers', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
