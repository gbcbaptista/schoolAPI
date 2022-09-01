const { Router } = require('express');
const PeopleController = require('../controller/PeopleController');


const router = Router();

router.get('/people', PeopleController.getAllPeople)

module.exports = router