const express = require('express');
const router = express.Router();
const pedidoController = require('../controladores/pedidoController');

router.get('/', pedidoController.listar);
router.get('/:id', pedidoController.obter);
router.post('/', pedidoController.criar);

module.exports = router;