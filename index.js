const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
const categories = require('./jsonFile/categories/categories.json')

app.get('/', (req, res) => {
    res.send('news api is running');
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('Dragon News SERVER on Port 5000')
})