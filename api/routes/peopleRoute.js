const { Router } = require('express');
const PeopleController = require('../controller/PeopleController');


const router = Router();

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getPersonById)
router.post('/people', PeopleController.createPerson)
router.put('/people/:id', PeopleController.updatePerson)
router.delete('/people/:id', PeopleController.deletePerson)
router.post('/people/:id/restore', PeopleController.restorePerson)
router.get('/people/:studentId/registration/:registrationId', PeopleController.getARegistration)
router.post('/people/:studentId/registration', PeopleController.createRegistration)
router.put('/people/:studentId/registration/:registrationId', PeopleController.updateRegistration)
router.delete('/people/:studentId/registration/:registrationId', PeopleController.deleteRegistration)
router.post('/people/:studentId/registration/:registrationId/restore', PeopleController.restoreRegistration)

module.exports = router