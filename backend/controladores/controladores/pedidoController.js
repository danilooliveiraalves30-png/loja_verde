const listar = (req, res) => {
    res.json({ message: 'Listar pedidos' });
};

const obter = (req, res) => {
    res.json({ message: 'Obter pedido' });
};

const criar = (req, res) => {
    res.json({ message: 'Criar pedido' });
};

module.exports = {
    listar,
    obter,
    criar
};