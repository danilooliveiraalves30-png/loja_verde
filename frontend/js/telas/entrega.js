// ==================== TELA ENTREGA ====================

function carregarEntrega() {
    const pedidos = api.listarPedidos();
    const pedido = pedidos[pedidos.length - 1];
    if (!pedido) return;
    
    // Atualizar timeline
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = pedido.etapas.map((etapa, index) => `
        <div class="timeline-item ${etapa.concluido ? 'ativo' : ''} ${etapa.atual ? 'atual' : ''}">
            <h4>${etapa.nome}</h4>
            <p>${etapa.horario}</p>
        </div>
    `).join('');
}