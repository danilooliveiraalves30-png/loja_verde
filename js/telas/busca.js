// ==================== TELA BUSCA E LISTAGEM ====================
let categoriaSelecionada = null;

function abrirBuscaComFoco() {
    navegarPara('busca');
    setTimeout(() => document.getElementById('busca-principal')?.focus(), 0);
}

function atualizarBotaoLimparBusca(visivel) {
    document.getElementById('limpar-busca').classList.toggle('hidden', !visivel);
}

function carregarBuscaPadrao() {
    const produtos = api.listarProdutos().filter(p => p.promocao || p.preco < 50);
    renderizarResultadosBusca(produtos);
}

function realizarBusca(termo) {
    categoriaSelecionada = null;
    const termoNormalizado = termo.trim();
    atualizarBotaoLimparBusca(Boolean(termoNormalizado));
    document.getElementById('termo-busca').textContent = termoNormalizado || 'Todos os produtos';
    const resultados = termoNormalizado ? api.buscarProdutos(termoNormalizado) : api.listarProdutos();
    renderizarResultadosBusca(resultados);
    if (estado.telaAtual !== 'busca') navegarPara('busca');
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
                        <i class="bi bi-star estrela" aria-hidden="true"></i>
                        ${produto.avaliacao}
                    </span>
                </div>
            </div>
                <button type="button" class="btn-add-rapido" onclick="event.stopPropagation(); adicionarRapido(${produto.id})" aria-label="Adicionar ${produto.nome} ao carrinho">+</button>
        </div>
    `).join('');
}

function filtrarCategoria(categoria) {
    categoriaSelecionada = categoria;
    atualizarBotaoLimparBusca(true);
    const produtos = api.filtrarPorCategoria(categoria);
    document.querySelectorAll('.filtros-lista .filtro-btn').forEach(btn => btn.classList.remove('ativo'));
    document.querySelector('.filtros-lista .filtro-btn')?.classList.add('ativo');
    document.getElementById('termo-busca').textContent = api.nomeCategoria(categoria);
    renderizarResultadosBusca(produtos);
    navegarPara('busca');
}

function limparBusca() {
    categoriaSelecionada = null;
    atualizarBotaoLimparBusca(false);
    document.getElementById('busca-principal').value = '';
    document.getElementById('termo-busca').textContent = 'Todos os produtos';
    const botaoTodos = document.querySelector('.filtros-lista .filtro-btn');
    aplicarFiltro('filtros', botaoTodos);
}

function aplicarFiltro(tipo, botao) {
    document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('ativo'));
    if (botao) botao.classList.add('ativo');
    
    if (tipo === 'filtros') {
        categoriaSelecionada = null;
        atualizarBotaoLimparBusca(false);
        document.getElementById('termo-busca').textContent = 'Todos os produtos';
    }

    let produtos = categoriaSelecionada
        ? api.filtrarPorCategoria(categoriaSelecionada)
        : api.listarProdutos();

    if (tipo === 'menor-preco') {
        produtos.sort((a, b) => a.preco - b.preco);
    } else if (tipo === 'maior-preco') {
        produtos.sort((a, b) => b.preco - a.preco);
    } else if (tipo === 'melhor-avaliacao') {
        produtos.sort((a, b) => b.avaliacao - a.avaliacao || a.nome.localeCompare(b.nome, 'pt-BR'));
    } else if (tipo === 'ate-50') {
        produtos = produtos.filter(p => p.preco <= 50);
    } else if (tipo === 'promocao') {
        produtos = produtos.filter(p => p.promocao || p.preco < 50);
    }
    
    renderizarResultadosBusca(produtos);
}