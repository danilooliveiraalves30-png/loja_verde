// ==================== BANCO DE DADOS (Simulação) ====================
const bancoDados = {
    produtos: [
        {
            id: 1,
            nome: 'Granola',
            preco: 24.90,
            categoria: 'organicos',
            imagem: 'granola',
            avaliacao: 4.5,
            avaliacoes: 128,
            destaque: true,
            nutricional: [
                { nutriente: 'Valor Energético', por100g: '433 kcal', vd: '22%' },
                { nutriente: 'Carboidratos', por100g: '68g', vd: '23%' },
                { nutriente: 'Proteínas', por100g: '10g', vd: '13%' },
                { nutriente: 'Gorduras Totais', por100g: '12g', vd: '22%' },
                { nutriente: 'Fibras', por100g: '8g', vd: '32%' },
                { nutriente: 'Sódio', por100g: '45mg', vd: '2%' }
            ],
            descricao: 'Granola artesanal crocante, feita com aveia integral, mel, castanhas e sementes. Ideal para café da manhã ou lanche saudável.',
            beneficios: [
                'Fonte de fibras que auxiliam na digestão',
                'Energia sustentada ao longo do dia',
                'Rica em ômegas 3 e 6 das sementes',
                'Sem conservantes artificiais',
                'Pode ser consumida com iogurte, leite ou frutas'
            ]
        },
        {
            id: 2,
            nome: 'Castanhas',
            preco: 18.50,
            categoria: 'naturais',
            imagem: 'castanhas',
            avaliacao: 4.7,
            avaliacoes: 95,
            destaque: true,
            nutricional: [
                { nutriente: 'Valor Energético', por100g: '650 kcal', vd: '33%' },
                { nutriente: 'Proteínas', por100g: '15g', vd: '20%' },
                { nutriente: 'Gorduras Totais', por100g: '63g', vd: '115%' },
                { nutriente: 'Carboidratos', por100g: '16g', vd: '5%' },
                { nutriente: 'Fibras', por100g: '8g', vd: '32%' },
                { nutriente: 'Magnésio', por100g: '250mg', vd: '67%' }
            ],
            descricao: 'Castanhas de caju selecionadas, torradas sem óleo. Fonte natural de gorduras boas e minerais essenciais.',
            beneficios: [
                'Rica em triptofano que auxilia no humor',
                'Fonte de magnésio para saúde muscular',
                'Gorduras insaturadas que protegem o coração',
                'Antioxidantes naturais',
                'Excelente para lanches entre as refeições'
            ]
        },
        {
            id: 3,
            nome: 'Proteína Ervilha 500g',
            preco: 89.90,
            categoria: 'suplementos',
            imagem: 'proteina-ervilha',
            avaliacao: 4.8,
            avaliacoes: 203,
            destaque: false,
            termoBusca: 'proteína vegetal',
            nutricional: [
                { nutriente: 'Valor Energético', por100g: '380 kcal', vd: '19%' },
                { nutriente: 'Proteínas', por100g: '80g', vd: '107%' },
                { nutriente: 'Carboidratos', por100g: '5g', vd: '2%' },
                { nutriente: 'Gorduras Totais', por100g: '3g', vd: '5%' },
                { nutriente: 'Sódio', por100g: '350mg', vd: '15%' },
                { nutriente: 'Ferro', por100g: '15mg', vd: '83%' }
            ],
            descricao: 'Proteína isolada de ervilha amarela de alta pureza. Alternativa vegana completa com todos os aminoácidos essenciais.',
            beneficios: [
                'Perfil aminoacídico completo',
                'Fácil digestão e absorção',
                'Rica em ferro para veganos',
                'Não contém alérgenos comuns',
                'Auxilia na recuperação muscular'
            ]
        },
        {
            id: 4,
            nome: 'Proteína Soja 1kg',
            preco: 129.00,
            categoria: 'suplementos',
            imagem: 'proteina-soja',
            avaliacao: 4.6,
            avaliacoes: 156,
            destaque: false,
            termoBusca: 'proteína vegetal',
            nutricional: [
                { nutriente: 'Valor Energético', por100g: '370 kcal', vd: '19%' },
                { nutriente: 'Proteínas', por100g: '90g', vd: '120%' },
                { nutriente: 'Carboidratos', por100g: '0g', vd: '0%' },
                { nutriente: 'Gorduras Totais', por100g: '1g', vd: '2%' },
                { nutriente: 'Cálcio', por100g: '200mg', vd: '20%' },
                { nutriente: 'Isoflavonas', por100g: '50mg', vd: '-' }
            ],
            descricao: 'Proteína isolada de soja com 90% de concentração. Isenta de lactose e ideal para dietas restritivas.',
            beneficios: [
                'Maior concentração de proteína vegetal',
                'Fonte de cálcio para ossos',
                'Isoflavonas que auxiliam na saúde hormonal',
                'Zero açúcar e lactose',
                'Custo-benefício superior'
            ]
        },
        {
            id: 5,
            nome: 'Proteína Arroz 450g',
            preco: 74.50,
            categoria: 'suplementos',
            imagem: 'proteina-arroz',
            avaliacao: 4.5,
            avaliacoes: 89,
            destaque: false,
            termoBusca: 'proteína vegetal',
            nutricional: [
                { nutriente: 'Valor Energético', por100g: '390 kcal', vd: '20%' },
                { nutriente: 'Proteínas', por100g: '85g', vd: '113%' },
                { nutriente: 'Carboidratos', por100g: '4g', vd: '1%' },
                { nutriente: 'Gorduras Totais', por100g: '2g', vd: '4%' },
                { nutriente: 'Vitamina B12', por100g: '2,5mcg', vd: '104%' },
                { nutriente: 'Zinco', por100g: '8mg', vd: '73%' }
            ],
            descricao: 'Proteína de arroz integral fermentada. Hipoalergênica e de fácil digestão, ideal para atletas sensíveis.',
            beneficios: [
                'Hipoalergênica e leve',
                'Enriquecida com vitamina B12',
                'Fonte de zinco para imunidade',
                'Sabor neutro que se mistura facilmente',
                'Sustentável e eco-friendly'
            ]
        },
        {
            id: 6,
            nome: 'Whey Protein Natural 900g',
            preco: 149.90,
            categoria: 'suplementos',
            imagem: 'whey-natural',
            avaliacao: 4.8,
            avaliacoes: 231,
            destaque: false,
            promocao: true,
            nutricional: [
                { nutriente: 'Valor Energético', por100g: '400 kcal', vd: '20%' },
                { nutriente: 'Proteínas', por100g: '80g', vd: '107%' },
                { nutriente: 'Carboidratos', por100g: '6,7g', vd: '2%' },
                { nutriente: 'Gorduras Totais', por100g: '5g', vd: '9%' },
                { nutriente: 'Gorduras Saturadas', por100g: '2,5g', vd: '11%' },
                { nutriente: 'Sódio', por100g: '200mg', vd: '8%' }
            ],
            descricao: 'Whey Protein concentrado de alta qualidade, extraído do soro do leite de vacas leiteiras. Sem adição de açúcares e aromatizantes artificiais.',
            beneficios: [
                'Auxilia no ganho de massa magra',
                'Recuperação muscular acelerada',
                'Promove saciedade prolongada',
                'Rico em aminoácidos essenciais e BCAAs',
                'Sem glúten e sem adição de açúcar'
            ]
        }
    ],
    carrinho: [
        { produtoId: 6, quantidade: 1, nome: 'Whey Protein Natural 900g', preco: 149.90 },
        { produtoId: 1, quantidade: 2, nome: 'Granola', preco: 24.90 },
        { produtoId: 2, quantidade: 1, nome: 'Castanhas', preco: 18.50 }
    ],
    pedidos: [
        {
            id: 4821,
            status: 'em-entrega',
            previsao: 'hoje até 14h',
            etapas: [
                { nome: 'Pedido confirmado', horario: '10:15', concluido: true },
                { nome: 'Em separação', horario: '10:25', concluido: true, atual: true },
                { nome: 'Saiu para entrega', horario: '11:20', concluido: true },
                { nome: 'Entregue', horario: 'Previsão: 13:30', concluido: false }
            ],
            entregador: { nome: 'Carlos', contato: 'disponível no app' }
        }
    ]
};

// ==================== API CLIENTE ====================
const api = {
    // Produtos
    listarProdutos: () => bancoDados.produtos,
    buscarProdutos: (termo) => bancoDados.produtos.filter(p => 
        p.nome.toLowerCase().includes(termo.toLowerCase()) || 
        (p.termoBusca && p.termoBusca.includes(termo.toLowerCase()))
    ),
    filtrarPorCategoria: (categoria) => bancoDados.produtos.filter(p => p.categoria === categoria),
    obterProduto: (id) => bancoDados.produtos.find(p => p.id === id),
    
    // Carrinho
    listarCarrinho: () => estado.carrinho,
    adicionarItem: (produtoId, quantidade) => {
        const produto = bancoDados.produtos.find(p => p.id === produtoId);
        const itemExistente = estado.carrinho.find(i => i.produtoId === produtoId);
        
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            estado.carrinho.push({
                produtoId: produto.id,
                quantidade: quantidade,
                nome: produto.nome,
                preco: produto.preco
            });
        }
        return estado.carrinho;
    },
    removerItem: (produtoId) => {
        estado.carrinho = estado.carrinho.filter(i => i.produtoId !== produtoId);
        return estado.carrinho;
    },
    calcularTotal: () => {
        const subtotal = estado.carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        const frete = subtotal > 200 ? 0 : 12.00;
        return { subtotal, frete, total: subtotal + frete };
    },
    
    // Pedidos
    listarPedidos: () => bancoDados.pedidos,
    obterPedido: (id) => bancoDados.pedidos.find(p => p.id === id),
    criarPedido: (itens, endereco) => {
        const novoPedido = {
            id: Math.floor(Math.random() * 9000) + 1000,
            status: 'confirmado',
            previsao: 'hoje até 14h',
            etapas: [
                { nome: 'Pedido confirmado', horario: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}), concluido: true, atual: true },
                { nome: 'Em separação', horario: '-', concluido: false },
                { nome: 'Saiu para entrega', horario: '-', concluido: false },
                { nome: 'Entregue', horario: '-', concluido: false }
            ],
            entregador: null,
            itens: [...itens],
            endereco
        };
        bancoDados.pedidos.push(novoPedido);
        return novoPedido;
    }
};

// ==================== IMAGENS DE PRODUTO ====================
// Gera a tag <img> para a foto do produto. Se o arquivo ainda não existir em
// img/produtos/, o onerror remove a tag e o CSS mostra um ícone de folha no
// lugar (ver .produto-imagem-placeholder:empty::after em estilos.css), então
// a loja nunca fica com "imagem quebrada" enquanto as fotos não são adicionadas.
function imagemProdutoHTML(produto) {
    return `<img src="img/produtos/${produto.imagem}.jpg" alt="${produto.nome}" loading="lazy" onerror="this.remove()">`;
}