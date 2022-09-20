const { Router } = require('express');
const StudentGroupsController = require('../controller/StudentGroupsController');


const router = Router();

router.get('/classroom', StudentGroupsController.getAllStudentGroups)
router.get('/classroom/:id', StudentGroupsController.getStudentGroupById)
router.post('/classroom', StudentGroupsController.createStudentGroup)
router.put('/classroom/:id', StudentGroupsController.updateStudentGroup)
router.delete('/classroom/:id', StudentGroupsController.deleteStudentGroup)
router.post('/classroom/:id/restore', StudentGroupsController.restoreStudentGroup)

module.exports = router