-- Criar tabela de pedidos

CREATE TABLE IF NOT EXISTS pedidos (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50) NOT NULL DEFAULT 'confirmado',
    previsao VARCHAR(100),
    entregador_nome VARCHAR(100),
    entregador_contato VARCHAR(100),
    endereco TEXT
);

-- Criar tabela de itens do pedido

CREATE TABLE IF NOT EXISTS itens_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    preco DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (pedido_id)
        REFERENCES pedidos(id)
        ON DELETE CASCADE,

    FOREIGN KEY (produto_id)
        REFERENCES produtos(id)
);

-- Criar tabela das etapas do pedido

CREATE TABLE IF NOT EXISTS pedido_etapas (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL,
    nome VARCHAR(100) NOT NULL,
    horario VARCHAR(50),
    concluido BOOLEAN DEFAULT FALSE,
    atual BOOLEAN DEFAULT FALSE,
    ordem INTEGER NOT NULL,

    FOREIGN KEY (pedido_id)
        REFERENCES pedidos(id)
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_itens_pedido_pedido
ON itens_pedido(pedido_id);

CREATE INDEX IF NOT EXISTS idx_itens_pedido_produto
ON itens_pedido(produto_id);

CREATE INDEX IF NOT EXISTS idx_pedido_etapas_pedido
ON pedido_etapas(pedido_id);