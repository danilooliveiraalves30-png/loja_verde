const listar = (req, res) => {
    res.json({ message: 'Listar carrinho' });
};

const adicionar = (req, res) => {
    res.json({ message: 'Adicionar ao carrinho' });
};

const remover = (req, res) => {
    res.json({ message: 'Remover do carrinho' });
};

const calcularTotal = (req, res) => {
    res.json({ message: 'Calcular total' });
};

module.exports = {
    listar,
    adicionar,
    remover,
    calcularTotal
};