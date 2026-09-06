// ==================== ESTADO DA APLICAÇÃO ====================
const estado = {
    telaAtual: 'inicio',
    produtoSelecionado: null,
    quantidadeProduto: 1,
    itensSelecionados: [],
    carrinho: []
};

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    carregarDestaques();
    carregarCarrinho();
});