// ==================== TELA DETALHE DO PRODUTO ====================

function abrirProduto(id) {
    const produto = api.obterProduto(id);
    if (!produto) return;
    
    estado.produtoSelecionado = produto;
    estado.quantidadeProduto = 1;
    
    // Atualizar informações básicas
    document.getElementById('detalhe-titulo').textContent = produto.nome;
    document.getElementById('detalhe-preco').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    document.getElementById('detalhe-avaliacao').textContent = `${produto.avaliacao} (${produto.avaliacoes})`;
    document.getElementById('quantidade-valor').textContent = '1';
    document.getElementById('detalhe-imagem').innerHTML = imagemProdutoHTML(produto);
    
    // Atualizar tabela nutricional
    const tabelaBody = document.querySelector('#tabela-nutricional tbody');
    if (produto.nutricional && Array.isArray(produto.nutricional)) {
        tabelaBody.innerHTML = produto.nutricional.map(item => `
            <tr>
                <td>${item.nutriente}</td>
                <td>${item.por100g}</td>
                <td>${item.vd}</td>
            </tr>
        `).join('');
    }
    
    // Atualizar descrição
    document.getElementById('detalhe-descricao').textContent = produto.descricao || 'Produto natural de alta qualidade.';
    
    // Atualizar lista de benefícios
    const listaBeneficios = document.getElementById('lista-beneficios');
    if (produto.beneficios && Array.isArray(produto.beneficios)) {
        listaBeneficios.innerHTML = produto.beneficios.map(beneficio => `
            <li>${beneficio}</li>
        `).join('');
    } else {
        listaBeneficios.innerHTML = '<li>Produto natural de alta qualidade.</li>';
    }
    
    // Mostrar tela de produto (não está na navegação)
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById('tela-produto').classList.add('ativa');
}

function alterarQuantidade(delta) {
    estado.quantidadeProduto = Math.max(1, estado.quantidadeProduto + delta);
    document.getElementById('quantidade-valor').textContent = estado.quantidadeProduto;
}

function adicionarAoCarrinho() {
    if (!estado.produtoSelecionado) return;
    
    api.adicionarItem(estado.produtoSelecionado.id, estado.quantidadeProduto);
    
    mostrarToast('Produto adicionado ao carrinho!');
    
    // Sempre navegar para carrinho com itens
    setTimeout(() => {
        carregarCarrinho();
        navegarPara('carrinho');
    }, 800);
}