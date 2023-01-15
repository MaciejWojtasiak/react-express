const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config({ path: "./config.env" });
const PORT = 3000;
const authRoute = require('./routes/auth');
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())


mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listens on port ${PORT}`)
        });
    })

app.use('/auth', authRoute)
