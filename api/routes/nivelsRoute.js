const { Router } = require('express');
const NivelsController = require('../controller/NivelsController');


const router = Router();

router.get('/nivel', NivelsController.getAllNivels)
router.get('/nivel/:id', NivelsController.getNivelById)
router.post('/nivel', NivelsController.createNivel)
router.put('/nivel/:id', NivelsController.updateNivel)
router.delete('/nivel/:id', NivelsController.deleteNivel)

module.exports = router