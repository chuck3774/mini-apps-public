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


const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});

