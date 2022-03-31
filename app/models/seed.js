// seed.js is going to be a script that we can run from the terminal, to create a bunch of pets at once. 

// we'll need to be careful with our seed here, and when we run it, because it will remove all the pets first, then add the new ones. 

const mongoose = require('mongoose')
const Candle = require('./candle')

const db = require('../../config/db')

const startCandles = [
    {name: 'lucky candle',scent: 'lemon',brand: 'homemade',hoursOfBurn: 50},
    {name: 'tasty candle',scent: 'vanilla',brand: 'yankee',hoursOfBurn: 30},
    {name: 'bright candle',scent: 'cherry',brand: 'woodwick',hoursOfBurn: 100},
    {name: 'first candle',scent: 'lavender',brand: 'aromascape',hoursOfBurn: 10},
    
]

// first we connect to the db via mongoose
mongoose.connect(db, {
	useNewUrlParser: true,
})
    .then(() => {
        // then we remove all the Candle except the ones that have an owner
        Candle.deleteMany({ owner: null })
            .then(deletedCandles => {
                console.log('deleted Candles', deletedCandles)
                // then we create using the startCandle array
                // we'll use console logs to check if it's working or if there are errors
                Candle.create(startCandles)
                    .then(newCandles => {
                        console.log('the new Candle', newCandles)
                        mongoose.connection.close()
                    })
                    .catch(err => {
                        console.log(err)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    // then at the end, we close our connection to the db
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })