var express = require('express');
var router = express.Router();
var XLSX = require("xlsx");
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(`https://stooq.com/q/l/?s=${req.query.q}&f=sd2t2ohlcvn&h&e=csv`).then(response => {
    // lendo a primeira página do csv de resposta da API stooq e retornando para api interna
    const workbook  = XLSX.read(response.data, {type: 'binary'});
    const first_ws = workbook.Sheets[workbook.SheetNames[0]];
    return res.status(200).json(XLSX.utils.sheet_to_json(first_ws))
  })

});

module.exports = router;
