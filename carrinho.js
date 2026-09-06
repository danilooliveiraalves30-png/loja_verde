// ==================== TELA CARRINHO ====================

function atualizarMiniCarrinho() {
    const barra = document.getElementById('mini-carrinho');
    const itens = api.listarCarrinho();
    const totalItens = itens.reduce((acc, item) => acc + item.quantidade, 0);

    if (totalItens === 0 || estado.telaAtual === 'carrinho' || estado.produtoAberto) {
        barra.classList.add('hidden');
        return;
    }

    const totais = api.calcularTotal();
    const textoItens = totalItens === 1 ? '1 item' : `${totalItens} itens`;
    document.getElementById('mini-carrinho-texto').textContent =
        `${textoItens} • R$ ${totais.subtotal.toFixed(2).replace('.', ',')}`;
    barra.classList.remove('hidden');
}

function carregarCarrinho() {
    const container = document.getElementById('itens-carrinho');
    const itens = api.listarCarrinho();
    
    if (itens.length === 0) {
        container.innerHTML = `
            <div class="carrinho-vazio">
                <img src="img/ilustracoes/carrinho-vazio.png" alt="" onerror="this.remove()">
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        document.getElementById('subtotal').textContent = 'R$ 0,00';
        document.getElementById('frete').textContent = 'R$ 0,00';
        document.getElementById('total').textContent = 'R$ 0,00';
        return;
    }
    
    container.innerHTML = itens.map(item => `
        <div class="carrinho-item">
            <div class="carrinho-item-info">
                <h4>${item.nome}</h4>
                <p class="carrinho-item-meta">Qtd: ${item.quantidade} • R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
            <span class="carrinho-item-preco">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
        </div>
    `).join('');
    
    const totais = api.calcularTotal();
    document.getElementById('subtotal').textContent = `R$ ${totais.subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('frete').textContent = `R$ ${totais.frete.toFixed(2).replace('.', ',')}`;
    document.getElementById('total').textContent = `R$ ${totais.total.toFixed(2).replace('.', ',')}`;
}

function finalizarPedido() {
    if (estado.carrinho.length === 0) {
        mostrarToast('Carrinho vazio!');
        return;
    }
    
    const endereco = { rua: 'Rua Exemplo', numero: '123', bairro: 'Centro' };
    const pedido = api.criarPedido(estado.carrinho, endereco);
    
    // Limpar carrinho
    estado.carrinho = [];
    
    mostrarToast(`Pedido #${pedido.id} realizado com sucesso!`);
    
    // Redirecionar para acompanhamento
    setTimeout(() => {
        carregarEntrega();
        navegarPara('pedidos');
    }, 1500);
}