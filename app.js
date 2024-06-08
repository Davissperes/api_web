const express = require('express')
const router = require('./routes/routes')
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use(router);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("API rodando em: http://localhost:" + port);
})