var express = require('express');
var router = express.Router();
var { getMedianPrime } = require("../controllers/primes")

router.post('/', getMedianPrime);

module.exports = router;