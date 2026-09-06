const express = require('express');
const router = express.Router();
const carrinhoController = require('../controladores/carrinhoController');

router.get('/', carrinhoController.listar);
router.post('/adicionar', carrinhoController.adicionar);
router.delete('/remover/:produtoId', carrinhoController.remover);
router.get('/total', carrinhoController.calcularTotal);

module.exports = router;