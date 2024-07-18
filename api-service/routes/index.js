var express = require('express')
const axios = require('axios')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Welcome!' })
})

// GET stock
router.get('/stock', function (req, res, next) {
  // fazendo o request na stock-service
  axios.get('http://localhost:3002', { params: req.query }).then((response) => {
    // montando a resposta conforme o pedido no desafio
    res.status(200).json({
      'símbolo': response.data[0].Symbol,
      'nome_da_empresa': response.data[0].Name,
      'cotação': response.data[0].Close,
    })
  })
})

module.exports = router
