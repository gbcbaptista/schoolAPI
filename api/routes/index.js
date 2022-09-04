const bodyParser = require('body-parser')
const people = require('./peopleRoute')
const nivels = require('./nivelsRoute')
const studentGroups = require('./studentGroupsRoute')

module.exports = app => {
    app.use(bodyParser.json(),
            people,
            nivels,
            studentGroups)
}