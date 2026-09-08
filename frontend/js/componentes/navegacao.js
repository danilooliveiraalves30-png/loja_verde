// ==================== NAVEGAÇÃO ====================

function navegarPara(tela) {
    // Esconder todas as telas
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('ativo'));

    // Mostrar navegação inferior
    document.querySelector('.navegacao-inferior').classList.remove('hidden');

    // Mapear navegação (sem perfil)
    const mapaTelas = {
        'inicio': 'tela-inicio',
        'busca': 'tela-busca',
        'carrinho': 'tela-carrinho',
        'pedidos': 'tela-entrega'
    };
    
    const idTela = mapaTelas[tela] || 'tela-inicio';
    document.getElementById(idTela).classList.add('ativa');
    
    // Atualizar nav ativo
    const navItens = document.querySelectorAll('.nav-item');
    const mapaNav = { 'inicio': 0, 'busca': 1, 'carrinho': 2, 'pedidos': 3 };
    if (mapaNav[tela] !== undefined) {
        navItens[mapaNav[tela]].classList.add('ativo');
    }
    
    estado.telaAtual = tela;
    
    // Carregar dados específicos da tela
    if (tela === 'inicio') carregarDestaques();
    if (tela === 'busca' && document.getElementById('resultados-busca').children.length === 0) carregarBuscaPadrao();
    if (tela === 'carrinho') carregarCarrinho();
    if (tela === 'pedidos') carregarEntrega();

    atualizarMiniCarrinho();
}