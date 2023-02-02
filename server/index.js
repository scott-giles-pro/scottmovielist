const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
var cors = require('cors');

app.use(cors({
    credentials: true, // important part here
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

app.get(('/'), (req, res) => {
    res.status(200).json('Welcome')
})

app.get('/movies', (req, res) => {
    knex('movies').select('*').then(data => res.status(200).send(data))
})


app.listen(port, () => console.log(`Express server is listening on port ${port}.`));