const compression = require('compression');
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(compression());
app.use(cors());


app.use(express.static(path.join(__dirname, '.', 'public')));

app.get('/bitcoin', (req, res) => {
 axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
 .then((data) => {
   res.status(200).json(data.data.bpi);
 })
 .catch((error) => {
   res.status(400).json(error);
 })
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});


