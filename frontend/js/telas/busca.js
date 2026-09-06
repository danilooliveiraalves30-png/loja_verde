// ==================== TELA BUSCA E LISTAGEM ====================

function carregarBuscaPadrao() {
    // Evita a tela em branco ao entrar em "Buscar" sem ter pesquisado nada ainda.
    const produtos = api.listarProdutos().filter(p => p.promocao || p.preco < 50);
    renderizarResultadosBusca(produtos);
}

function realizarBusca(termo) {
    if (!termo.trim()) return;
    
    document.getElementById('termo-busca').textContent = termo;
    const resultados = api.buscarProdutos(termo);
    renderizarResultadosBusca(resultados);
    navegarPara('busca');
}

function renderizarResultadosBusca(produtos) {
    const container = document.getElementById('resultados-busca');

    if (produtos.length === 0) {
        container.innerHTML = `
            <div class="sem-resultados">
                <img src="img/ilustracoes/busca-vazia.png" alt="" onerror="this.remove()">
                <p>Nenhum produto encontrado.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = produtos.map(produto => `
        <div class="produto-lista-item" onclick="abrirProduto(${produto.id})">
            <div class="produto-lista-imagem">${imagemProdutoHTML(produto)}</div>
            <div class="produto-lista-info">
                <h4>${produto.nome}</h4>
                <div class="produto-lista-meta">
                    <span class="produto-preco-lista">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                    <span class="produto-avaliacao">
                        <span class="estrela">★</span>
                        ${produto.avaliacao}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function filtrarCategoria(categoria) {
    const produtos = api.filtrarPorCategoria(categoria);
    document.getElementById('termo-busca').textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    renderizarResultadosBusca(produtos);
    navegarPara('busca');
}

function aplicarFiltro(tipo) {
    document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('ativo'));
    event.target.classList.add('ativo');
    
    let produtos = api.listarProdutos();
    
    if (tipo === 'menor-preco') {
        produtos.sort((a, b) => a.preco - b.preco);
    } else if (tipo === 'promocao') {
        produtos = produtos.filter(p => p.promocao || p.preco < 50);
    }
    
    renderizarResultadosBusca(produtos);
}