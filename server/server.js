const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors);


app.get('/', ((req, res) => {
    res.send('Server running.')
}));

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`)
})

