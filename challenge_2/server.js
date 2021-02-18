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
 axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10')
 .then((data) => {
  let info = data.data.Data.Data;
  let time = [];
  let price = [];
  info.map((instance, i) => {
    time.push(instance.time);
    price.push(instance.close);
  })
  let filteredData = {times: time, prices: price};
  res.status(200).json(filteredData);
 })
 .catch((error) => {
   res.status(400).json(error);
 })
})

app.get('/ethereum', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=10')
  .then((data) => {
    let info = data.data.Data.Data;
    let time = [];
    let price = [];
    info.map((instance, i) => {
      time.push(instance.time);
      price.push(instance.close);
    })
    let filteredData = {times: time, prices: price};
    res.status(200).json(filteredData);
  })
  .catch((error) => {
    res.status(400).json(error);
  })
 })

 app.get('/ripple', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=USD&limit=10')
  .then((data) => {
    let info = data.data.Data.Data;
    let time = [];
    let price = [];
    info.map((instance, i) => {
      time.push(instance.time);
      price.push(instance.close);
    })
    let filteredData = {times: time, prices: price};
    res.status(200).json(filteredData);
  })
  .catch((error) => {
    res.status(400).json(error);
  })
 })

 app.get('/bitcoinCash', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BCH&tsym=USD&limit=10')
  .then((data) => {
    let info = data.data.Data.Data;
    let time = [];
    let price = [];
    info.map((instance, i) => {
      time.push(instance.time);
      price.push(instance.close);
    })
    let filteredData = {times: time, prices: price};
    res.status(200).json(filteredData);
  })
  .catch((error) => {
    res.status(400).json(error);
  })
 })

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});


