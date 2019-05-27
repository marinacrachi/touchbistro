// import { sieve } from '../services/numbers'

const sieve = require('../services/numbers')

var getMedianPrime = (req,res) => {
    console.log(req.body)
    var primesArray = sieve(parseInt(req.body.number))


    var medianPosition = Math.floor(primesArray.length / 2)
    var medianArray = []

    if (primesArray.length % 2 == 0) {
        medianArray.push(primesArray[medianPosition], primesArray[medianPosition + 1])
    } else {
        medianArray.push(primesArray[medianPosition])
    }

    res.send(medianArray);
}

module.exports = {
	getMedianPrime: getMedianPrime
};