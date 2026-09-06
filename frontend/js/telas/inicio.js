// ==================== TELA INÍCIO ====================

function carregarDestaques() {
    const container = document.getElementById('produtos-destaque');
    const destaques = api.listarProdutos().filter(p => p.destaque);
    
    container.innerHTML = destaques.map(produto => `
        <div class="produto-card" onclick="abrirProduto(${produto.id})">
            ${produto.promocao ? '<span class="produto-badge">Promoção</span>' : ''}
            <div class="produto-imagem-placeholder">${imagemProdutoHTML(produto)}</div>
            <div class="produto-nome">${produto.nome}</div>
            <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
        </div>
    `).join('');
}

function verPromocao(promo) {
    realizarBusca('whey protein');
}