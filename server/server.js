const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config({ path: "./config.env" });
const PORT = 3000;
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())


app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/posts', postsRoute)
app.use('/categories', categoriesRoute)


mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listens on port ${PORT}`)
        });
    })

