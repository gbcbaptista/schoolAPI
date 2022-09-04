const { Router } = require('express');
const PeopleController = require('../controller/PeopleController');


const router = Router();

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getPersonById)
router.post('/people', PeopleController.createPerson)
router.put('/people/:id', PeopleController.updatePerson)
router.delete('/people/:id', PeopleController.deletePerson)
router.get('/people/:studentId/registration/:registrationId', PeopleController.getARegistration)
router.post('/people/:studentId/registration', PeopleController.createRegistration)

module.exports = router