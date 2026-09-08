-- Criar tabela de produtos

CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    imagem VARCHAR(150),
    avaliacao DECIMAL(2,1),
    avaliacoes INTEGER DEFAULT 0,
    destaque BOOLEAN DEFAULT FALSE,
    promocao BOOLEAN DEFAULT FALSE,
    termo_busca VARCHAR(150),
    descricao TEXT
);

CREATE INDEX IF NOT EXISTS idx_produtos_categoria
ON produtos(categoria);

CREATE INDEX IF NOT EXISTS idx_produtos_destaque
ON produtos(destaque);