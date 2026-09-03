// Configuração de conexão com banco de dados

const { Pool } = require('pg');
// ou const mysql = require('mysql2/promise');
// ou const mongoose = require('mongoose');

// PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;