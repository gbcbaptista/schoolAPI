const bodyParser = require('body-parser')
const people = require('./peopleRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(people);
    app.get('/', (req, res) => {
        res.send('Ola');
    })
}