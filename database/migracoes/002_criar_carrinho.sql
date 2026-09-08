-- Criar tabela de carrinhos

CREATE TABLE IF NOT EXISTS carrinhos (
    id SERIAL PRIMARY KEY
);

-- Criar tabela de itens do carrinho

CREATE TABLE IF NOT EXISTS itens_carrinho (
    id SERIAL PRIMARY KEY,
    carrinho_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL DEFAULT 1,

    FOREIGN KEY (carrinho_id)
        REFERENCES carrinhos(id)
        ON DELETE CASCADE,

    FOREIGN KEY (produto_id)
        REFERENCES produtos(id)
);

CREATE INDEX IF NOT EXISTS idx_itens_carrinho_carrinho
ON itens_carrinho(carrinho_id);

CREATE INDEX IF NOT EXISTS idx_itens_carrinho_produto
ON itens_carrinho(produto_id);