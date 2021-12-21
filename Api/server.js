const express = require('express');
const path = require('path');
const app = express(),
            bodyParser = require("body-parser");
            port = 3080;
const axios = require('axios')

const data = [];
const coinMarketCapApi = 'cbc51af2-adfc-46f2-8bc3-1a80f5489940';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../cryptofy-react/build')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});// Para resolver el problema de la comunicación entre dominios, simplemente copie directamente; el uso es la forma de registrar el middleware express

const getCrypto = (currency) => {
    return axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=40&convert='+currency.toUpperCase(),{
            headers: {'X-CMC_PRO_API_KEY':coinMarketCapApi}
        }).then(data => data);
}

app.get('/api/:currency', (req, res) => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=40&convert='+req.params.currency.toUpperCase(),{
        headers: {'X-CMC_PRO_API_KEY':coinMarketCapApi}
    }).then((response) => {
        res.json(response.data);
    }).catch((error) => {
          console.log(error);
      });
    //var crypto = getCrypto(req.params.currency);
    //res.json(this.data);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});