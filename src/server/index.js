const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.listen(process.env.PORT || 8081, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 8081) + '!')
})

app.post('/api', async (req, res) => {
    const text = req.body.text;
    const api_key = process.env.API_KEY;
    const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&lang=en&txt=${text}`;

    try {
        const response = await fetch(api_url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

app.post('/test', bodyParser.json(), function (req, res) {
    const { text } = req.body;
    console.log('Received text:', text);
    res.send(mockAPIResponse);
});

