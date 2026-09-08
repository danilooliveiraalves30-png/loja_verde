-- Criar tabela de informações nutricionais dos produtos

CREATE TABLE IF NOT EXISTS produto_nutricional (
    id SERIAL PRIMARY KEY,
    produto_id INTEGER NOT NULL,
    nutriente VARCHAR(100) NOT NULL,
    por_100g VARCHAR(50),
    vd VARCHAR(20),

    FOREIGN KEY (produto_id)
        REFERENCES produtos(id)
        ON DELETE CASCADE
);

-- Criar tabela de benefícios dos produtos

CREATE TABLE IF NOT EXISTS produto_beneficios (
    id SERIAL PRIMARY KEY,
    produto_id INTEGER NOT NULL,
    beneficio TEXT NOT NULL,

    FOREIGN KEY (produto_id)
        REFERENCES produtos(id)
        ON DELETE CASCADE
);

-- Índices para facilitar as consultas

CREATE INDEX IF NOT EXISTS idx_produto_nutricional_produto
ON produto_nutricional(produto_id);

CREATE INDEX IF NOT EXISTS idx_produto_beneficios_produto
ON produto_beneficios(produto_id);