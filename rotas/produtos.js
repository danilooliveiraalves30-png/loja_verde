const express = require('express');
const router = express.Router();
const produtoController = require('../controladores/produtoController');

router.get('/', produtoController.listar);
router.get('/buscar', produtoController.buscar);
router.get('/categoria/:categoria', produtoController.filtrarPorCategoria);
router.get('/:id', produtoController.obter);

module.exports = router;