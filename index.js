var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var primes = require('./routes/primes');

app.use(bodyParser.json({ type: 'application/json' }))
app.use('/', express.static('public'))
app.use('/primes', primes);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
