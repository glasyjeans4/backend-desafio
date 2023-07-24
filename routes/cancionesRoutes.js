const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');
const generosController = require('../controllers/generosController');


router.get('/', cancionesController.listarCanciones);
router.post('/', cancionesController.crearCancion);
router.get('/ultima', cancionesController.ultimaCancion);
router.get('/:id', cancionesController.obtenerCancion);
router.put('/:id', cancionesController.actualizarCancion);
router.delete('/:id', cancionesController.eliminarCancion);

module.exports = router;
