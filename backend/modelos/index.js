

// Exemplo com Sequelize:
/*
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Produto = sequelize.define('Produto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    preco: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    categoria: { type: DataTypes.STRING },
    imagem: { type: DataTypes.STRING },
    avaliacao: { type: DataTypes.DECIMAL(2, 1) },
    avaliacoes: { type: DataTypes.INTEGER },
    destaque: { type: DataTypes.BOOLEAN, defaultValue: false },
    promocao: { type: DataTypes.BOOLEAN, defaultValue: false },
    descricao: { type: DataTypes.TEXT },
    nutricional: { type: DataTypes.JSON },
    beneficios: { type: DataTypes.JSON }
});

module.exports = { sequelize, Produto };
*/

module.exports = {};