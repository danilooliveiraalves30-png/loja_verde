// ==================== BANCO DE DADOS (Simulação) ====================
function tabelaNutricional({ energia, proteinas, carboidratos, gorduras, fibras, sodio, extraNutriente, extraValor, extraVd }) {
    const tabela = [
        { nutriente: 'Valor Energético', por100g: energia, vd: '-' },
        { nutriente: 'Proteínas', por100g: proteinas, vd: '-' },
        { nutriente: 'Carboidratos', por100g: carboidratos, vd: '-' },
        { nutriente: 'Gorduras Totais', por100g: gorduras, vd: '-' },
        { nutriente: 'Fibras', por100g: fibras, vd: '-' },
        { nutriente: 'Sódio', por100g: sodio, vd: '-' }
    ];
    if (extraNutriente) {
        tabela.push({ nutriente: extraNutriente, por100g: extraValor, vd: extraVd || '-' });
    }
    return tabela;
}

const categorias = {
    suplementos: 'Suplementos',
    naturais: 'Naturais',
    organicos: 'Orgânicos',
    bebidas: 'Bebidas',
    snacks: 'Snacks saudáveis',
    vitaminas: 'Vitaminas e minerais'
};

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
        },
        {
            id: 7,
            nome: 'Pasta de Amendoim Integral 500g',
            preco: 29.90,
            categoria: 'naturais',
            imagem: 'pasta-amendoim',
            avaliacao: 4.8,
            avaliacoes: 174,
            destaque: true,
            termoBusca: 'pasta amendoim proteína',
            nutricional: tabelaNutricional({ energia: '588 kcal', proteinas: '25g', carboidratos: '18g', gorduras: '48g', fibras: '9g', sodio: '4mg' }),
            descricao: 'Pasta de amendoim integral cremosa, feita somente com amendoins selecionados e sem açúcar.',
            beneficios: ['Fonte de gorduras boas', 'Ajuda na saciedade', 'Sem açúcar adicionado']
        },
        {
            id: 8,
            nome: 'Chia em Sementes 200g',
            preco: 16.90,
            categoria: 'naturais',
            imagem: 'chia',
            avaliacao: 4.7,
            avaliacoes: 112,
            destaque: true,
            termoBusca: 'chia sementes fibras',
            nutricional: tabelaNutricional({ energia: '486 kcal', proteinas: '17g', carboidratos: '42g', gorduras: '31g', fibras: '34g', sodio: '16mg' }),
            descricao: 'Sementes de chia selecionadas para enriquecer vitaminas, iogurtes, saladas e receitas.',
            beneficios: ['Rica em fibras', 'Fonte de ômega 3', 'Versátil no dia a dia']
        },
        {
            id: 9,
            nome: 'Aveia em Flocos 500g',
            preco: 12.90,
            categoria: 'organicos',
            imagem: 'aveia',
            avaliacao: 4.6,
            avaliacoes: 86,
            destaque: true,
            termoBusca: 'aveia fibras café da manhã',
            nutricional: tabelaNutricional({ energia: '389 kcal', proteinas: '17g', carboidratos: '66g', gorduras: '7g', fibras: '11g', sodio: '2mg' }),
            descricao: 'Aveia em flocos integrais, prática para o café da manhã e receitas nutritivas.',
            beneficios: ['Fonte de fibras', 'Ajuda no equilíbrio da alimentação', 'Sem ingredientes artificiais']
        },
        {
            id: 10,
            nome: 'Mix de Sementes 250g',
            preco: 22.50,
            categoria: 'organicos',
            imagem: 'mix-sementes',
            avaliacao: 4.5,
            avaliacoes: 64,
            destaque: false,
            termoBusca: 'sementes salada ômega',
            nutricional: tabelaNutricional({ energia: '510 kcal', proteinas: '19g', carboidratos: '28g', gorduras: '36g', fibras: '13g', sodio: '8mg' }),
            descricao: 'Mix crocante de sementes de girassol, abóbora e linhaça para finalizar suas refeições.',
            beneficios: ['Textura crocante', 'Fonte de minerais', 'Combina com saladas e sopas']
        },
        {
            id: 11,
            nome: 'Cacau em Pó 100% 200g',
            preco: 19.90,
            categoria: 'naturais',
            imagem: 'cacau-po',
            avaliacao: 4.8,
            avaliacoes: 143,
            destaque: false,
            termoBusca: 'cacau chocolate sem açúcar',
            nutricional: tabelaNutricional({ energia: '228 kcal', proteinas: '20g', carboidratos: '14g', gorduras: '11g', fibras: '29g', sodio: '5mg' }),
            descricao: 'Cacau em pó 100% puro, sem açúcar, para bebidas, vitaminas e sobremesas.',
            beneficios: ['Sabor intenso', 'Sem açúcar adicionado', 'Fonte de antioxidantes']
        },
        {
            id: 12,
            nome: 'Colágeno Hidrolisado 300g',
            preco: 69.90,
            categoria: 'suplementos',
            imagem: 'colageno',
            avaliacao: 4.7,
            avaliacoes: 98,
            destaque: false,
            promocao: true,
            termoBusca: 'colágeno pele articulações',
            nutricional: tabelaNutricional({ energia: '351 kcal', proteinas: '88g', carboidratos: '1g', gorduras: '2g', fibras: '0g', sodio: '72mg' }),
            descricao: 'Colágeno hidrolisado em pó, fácil de dissolver em água, sucos ou vitaminas.',
            beneficios: ['Prático para a rotina', 'Alta solubilidade', 'Sem sabor artificial']
        },
        {
            id: 13,
            nome: 'Creatina Monohidratada 300g',
            preco: 79.90,
            categoria: 'suplementos',
            imagem: 'creatina',
            avaliacao: 4.9,
            avaliacoes: 267,
            destaque: true,
            termoBusca: 'creatina força treino',
            nutricional: tabelaNutricional({ energia: '387 kcal', proteinas: '78g', carboidratos: '9g', gorduras: '6g', fibras: '1g', sodio: '178mg' }),
            descricao: 'Creatina monohidratada pura para complementar sua rotina de treinos.',
            beneficios: ['100% monohidratada', 'Sem açúcar', 'Fácil de misturar']
        },
        {
            id: 14,
            nome: 'Barras de Proteína Cacau',
            preco: 34.90,
            categoria: 'suplementos',
            imagem: 'barra-proteina',
            avaliacao: 4.4,
            avaliacoes: 71,
            destaque: false,
            promocao: true,
            termoBusca: 'barra proteína lanche',
            nutricional: tabelaNutricional({ energia: '402 kcal', proteinas: '16g', carboidratos: '54g', gorduras: '15g', fibras: '6g', sodio: '94mg' }),
            descricao: 'Barras de proteína com sabor de cacau para um lanche prático antes ou depois do treino.',
            beneficios: ['Prática para levar', 'Boa fonte de proteína', 'Sabor de cacau']
        },
        {
            id: 15,
            nome: 'Chá Verde em Folhas 50g',
            preco: 14.90,
            categoria: 'naturais',
            imagem: 'cha-verde',
            avaliacao: 4.6,
            avaliacoes: 58,
            destaque: false,
            termoBusca: 'chá verde folhas bebida',
            nutricional: tabelaNutricional({ energia: '280 kcal', proteinas: '3g', carboidratos: '64g', gorduras: '2g', fibras: '0g', sodio: '1mg' }),
            descricao: 'Chá verde em folhas selecionadas para preparar uma bebida leve e aromática.',
            beneficios: ['Aroma fresco', 'Preparo simples', 'Sem açúcar']
        },
        {
            id: 16,
            nome: 'Óleo de Coco Extra Virgem 200ml',
            preco: 27.90,
            categoria: 'organicos',
            imagem: 'oleo-coco',
            avaliacao: 4.5,
            avaliacoes: 83,
            destaque: false,
            termoBusca: 'óleo coco culinária',
            nutricional: tabelaNutricional({ energia: '670 kcal', proteinas: '7g', carboidratos: '24g', gorduras: '62g', fibras: '16g', sodio: '22mg' }),
            descricao: 'Óleo de coco extra virgem prensado a frio para uso culinário.',
            beneficios: ['Prensado a frio', 'Versátil na cozinha', 'Sem aditivos']
        },
        {
            id: 17,
            nome: 'Leite de Coco em Pó 200g',
            preco: 31.90,
            categoria: 'organicos',
            imagem: 'leite-coco-po',
            avaliacao: 4.6,
            avaliacoes: 47,
            destaque: false,
            termoBusca: 'leite coco vegano',
            nutricional: tabelaNutricional({ energia: '412 kcal', proteinas: '6g', carboidratos: '8g', gorduras: '41g', fibras: '0g', sodio: '14mg' }),
            descricao: 'Leite de coco em pó para preparar bebidas e receitas de forma prática.',
            beneficios: ['Opção vegana', 'Fácil de preparar', 'Sem lactose']
        },
        {
            id: 18,
            nome: 'Multivitamínico A-Z 60 Cápsulas',
            preco: 49.90,
            categoria: 'suplementos',
            imagem: 'multivitaminico',
            avaliacao: 4.7,
            avaliacoes: 119,
            destaque: false,
            termoBusca: 'vitaminas multivitamínico cápsulas',
            nutricional: tabelaNutricional({ energia: '535 kcal', proteinas: '8g', carboidratos: '17g', gorduras: '49g', fibras: '3g', sodio: '86mg' }),
            descricao: 'Combinação de vitaminas e minerais para complementar uma alimentação equilibrada.',
            beneficios: ['Fácil de incluir na rotina', '60 cápsulas', 'Uso diário']
        },
        {
            id: 19,
            nome: 'Barrinha de Cereal com Castanhas',
            preco: 21.90,
            categoria: 'snacks',
            imagem: 'barrinha-cereal',
            avaliacao: 4.4,
            avaliacoes: 52,
            destaque: false,
            termoBusca: 'barra cereal lanche castanhas',
            nutricional: tabelaNutricional({ energia: '398 kcal', proteinas: '8g', carboidratos: '63g', gorduras: '13g', fibras: '5g', sodio: '76mg' }),
            descricao: 'Barrinha crocante de cereais integrais e castanhas para um lanche rápido.',
            beneficios: ['Prática para levar', 'Crocante e saborosa', 'Fonte de fibras']
        },
        {
            id: 20,
            nome: 'Bebida de Amêndoas 1L',
            preco: 18.90,
            categoria: 'bebidas',
            imagem: 'bebida-amendoas',
            avaliacao: 4.5,
            avaliacoes: 61,
            destaque: false,
            promocao: true,
            termoBusca: 'leite bebida amêndoas vegetal',
            nutricional: tabelaNutricional({ energia: '24 kcal', proteinas: '0,8g', carboidratos: '2,1g', gorduras: '1,4g', fibras: '0,6g', sodio: '42mg' }),
            descricao: 'Bebida vegetal de amêndoas, leve e sem lactose, para beber ou usar em receitas.',
            beneficios: ['Sem lactose', 'Opção vegetal', 'Baixo teor calórico']
        },
        {
            id: 21,
            nome: 'Kombucha de Gengibre 355ml',
            preco: 11.90,
            categoria: 'bebidas',
            imagem: 'kombucha-gengibre',
            avaliacao: 4.6,
            avaliacoes: 44,
            destaque: false,
            termoBusca: 'kombucha bebida fermentada gengibre',
            nutricional: tabelaNutricional({ energia: '18 kcal', proteinas: '0g', carboidratos: '4,2g', gorduras: '0g', fibras: '0g', sodio: '7mg' }),
            descricao: 'Kombucha fermentada com gengibre e sabor refrescante para qualquer momento do dia.',
            beneficios: ['Bebida fermentada', 'Refrescante', 'Baixo teor de açúcar']
        },
        {
            id: 22,
            nome: 'Farinha de Linhaça Dourada 250g',
            preco: 17.90,
            categoria: 'organicos',
            imagem: 'farinha-linhaca',
            avaliacao: 4.7,
            avaliacoes: 73,
            destaque: false,
            termoBusca: 'linhaça farinha fibras ômega',
            nutricional: tabelaNutricional({ energia: '482 kcal', proteinas: '18g', carboidratos: '29g', gorduras: '36g', fibras: '27g', sodio: '30mg' }),
            descricao: 'Farinha de linhaça dourada moída na hora para vitaminas, massas e preparos.',
            beneficios: ['Fonte de fibras', 'Rica em ômega 3', 'Fácil de usar em receitas']
        },
        {
            id: 23,
            nome: 'Spirulina em Pó 100g',
            preco: 39.90,
            categoria: 'suplementos',
            imagem: 'spirulina',
            avaliacao: 4.5,
            avaliacoes: 39,
            destaque: false,
            termoBusca: 'spirulina alga suplemento',
            nutricional: tabelaNutricional({ energia: '290 kcal', proteinas: '57g', carboidratos: '24g', gorduras: '8g', fibras: '4g', sodio: '1048mg' }),
            descricao: 'Spirulina em pó para adicionar a sucos e vitaminas, com sabor marcante e natural.',
            beneficios: ['Alta concentração de proteína', 'Fonte de minerais', 'Rende várias porções']
        },
        {
            id: 24,
            nome: 'Magnésio Quelato 60 Cápsulas',
            preco: 42.90,
            categoria: 'vitaminas',
            imagem: 'magnesio-quelato',
            avaliacao: 4.8,
            avaliacoes: 91,
            destaque: false,
            termoBusca: 'magnésio mineral cápsulas',
            nutricional: tabelaNutricional({ energia: '0 kcal', proteinas: '0g', carboidratos: '0g', gorduras: '0g', fibras: '0g', sodio: '0mg', extraNutriente: 'Magnésio', extraValor: '350mg', extraVd: '83%' }),
            descricao: 'Suplemento de magnésio quelato em cápsulas para complementar a rotina.',
            beneficios: ['60 cápsulas', 'Prático para o dia a dia', 'Sem açúcar']
        },
        {
            id: 25,
            nome: 'Vitamina D3 60 Cápsulas',
            preco: 36.90,
            categoria: 'vitaminas',
            imagem: 'vitamina-d3',
            avaliacao: 4.8,
            avaliacoes: 104,
            destaque: false,
            termoBusca: 'vitamina d suplemento cápsulas',
            nutricional: tabelaNutricional({ energia: '0 kcal', proteinas: '0g', carboidratos: '0g', gorduras: '0g', fibras: '0g', sodio: '0mg', extraNutriente: 'Vitamina D3', extraValor: '25mcg', extraVd: '167%' }),
            descricao: 'Vitamina D3 em cápsulas, ideal para manter uma suplementação simples e organizada.',
            beneficios: ['60 cápsulas', 'Fácil de consumir', 'Sem glúten']
        },
        {
            id: 26,
            nome: 'Mix de Castanhas Premium 300g',
            preco: 44.90,
            categoria: 'snacks',
            imagem: 'mix-castanhas',
            avaliacao: 4.9,
            avaliacoes: 88,
            destaque: true,
            termoBusca: 'castanhas mix nuts lanche',
            nutricional: tabelaNutricional({ energia: '615 kcal', proteinas: '18g', carboidratos: '19g', gorduras: '55g', fibras: '9g', sodio: '11mg' }),
            descricao: 'Mix de castanhas, amêndoas e nozes selecionadas para um lanche nutritivo.',
            beneficios: ['Sem fritura', 'Fonte de gorduras boas', 'Embalagem prática']
        },
        {
            id: 27,
            nome: 'Chips de Coco sem Açúcar 100g',
            preco: 15.90,
            categoria: 'snacks',
            imagem: 'chips-coco',
            avaliacao: 4.3,
            avaliacoes: 33,
            destaque: false,
            promocao: true,
            termoBusca: 'chips coco snack sem açúcar',
            nutricional: tabelaNutricional({ energia: '641 kcal', proteinas: '7g', carboidratos: '24g', gorduras: '60g', fibras: '16g', sodio: '28mg' }),
            descricao: 'Lascas de coco crocantes e assadas, sem açúcar adicionado.',
            beneficios: ['Sem açúcar adicionado', 'Crocante', 'Ingredientes simples']
        },
        {
            id: 28,
            nome: 'Mel Orgânico Silvestre 300g',
            preco: 26.90,
            categoria: 'organicos',
            imagem: 'mel-organico',
            avaliacao: 4.8,
            avaliacoes: 66,
            destaque: false,
            termoBusca: 'mel orgânico adoçante natural',
            nutricional: tabelaNutricional({ energia: '309 kcal', proteinas: '0,4g', carboidratos: '84g', gorduras: '0g', fibras: '0,2g', sodio: '4mg' }),
            descricao: 'Mel orgânico silvestre, floral e encorpado, para adoçar bebidas e receitas.',
            beneficios: ['Origem orgânica', 'Sabor floral', 'Sem conservantes']
        },
        {
            id: 29,
            nome: 'Quinoa em Grãos 500g',
            preco: 28.90,
            categoria: 'organicos',
            imagem: 'quinoa',
            avaliacao: 4.7,
            avaliacoes: 57,
            destaque: false,
            termoBusca: 'quinoa grãos proteína vegetal',
            nutricional: tabelaNutricional({ energia: '368 kcal', proteinas: '14g', carboidratos: '64g', gorduras: '6g', fibras: '7g', sodio: '5mg' }),
            descricao: 'Quinoa em grãos para saladas, acompanhamentos e receitas sem glúten.',
            beneficios: ['Fonte de proteína vegetal', 'Sem glúten', 'Preparo versátil']
        },
        {
            id: 30,
            nome: 'Pasta de Amêndoas 300g',
            preco: 38.90,
            categoria: 'naturais',
            imagem: 'pasta-amendoas',
            avaliacao: 4.6,
            avaliacoes: 42,
            destaque: false,
            termoBusca: 'pasta amêndoas oleaginosas',
            nutricional: tabelaNutricional({ energia: '614 kcal', proteinas: '21g', carboidratos: '19g', gorduras: '55g', fibras: '11g', sodio: '1mg' }),
            descricao: 'Pasta de amêndoas integral, cremosa e sem açúcar adicionado.',
            beneficios: ['Fonte de vitamina E', 'Sem açúcar adicionado', 'Textura cremosa']
        },
        {
            id: 31,
            nome: 'Isotônico Natural Limão 500ml',
            preco: 9.90,
            categoria: 'bebidas',
            imagem: 'isotonico-limao',
            avaliacao: 4.2,
            avaliacoes: 28,
            destaque: false,
            termoBusca: 'isotônico bebida limão treino',
            nutricional: tabelaNutricional({ energia: '22 kcal', proteinas: '0g', carboidratos: '5,1g', gorduras: '0g', fibras: '0g', sodio: '110mg' }),
            descricao: 'Bebida de limão com eletrólitos para acompanhar sua rotina ativa.',
            beneficios: ['Refrescante', 'Com eletrólitos', 'Pronto para beber']
        },
        {
            id: 32,
            nome: 'Probióticos 30 Cápsulas',
            preco: 59.90,
            categoria: 'vitaminas',
            imagem: 'probioticos',
            avaliacao: 4.7,
            avaliacoes: 76,
            destaque: false,
            termoBusca: 'probióticos flora intestinal cápsulas',
            nutricional: tabelaNutricional({ energia: '0 kcal', proteinas: '0g', carboidratos: '0g', gorduras: '0g', fibras: '0g', sodio: '0mg', extraNutriente: 'Culturas probióticas', extraValor: '10 bilhões UFC', extraVd: '-' }),
            descricao: 'Cápsulas de probióticos para complementar uma rotina de cuidados com a alimentação.',
            beneficios: ['30 cápsulas', 'Fácil de transportar', 'Uso prático']
        },
        {
            id: 33,
            nome: 'Matcha Cerimonial 30g',
            preco: 32.90,
            categoria: 'bebidas',
            imagem: 'matcha',
            avaliacao: 4.6,
            avaliacoes: 37,
            destaque: false,
            termoBusca: 'matcha chá verde bebida',
            nutricional: tabelaNutricional({ energia: '324 kcal', proteinas: '30g', carboidratos: '39g', gorduras: '5g', fibras: '38g', sodio: '1mg' }),
            descricao: 'Matcha de moagem fina para preparar bebidas intensas e aromáticas.',
            beneficios: ['Aroma marcante', 'Rende várias porções', 'Ideal para bebidas']
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

function normalizarTexto(texto) {
    return String(texto || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

// ==================== API CLIENTE ====================
function ordenarAlfabeticamente(produtos) {
    return [...produtos].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }));
}

const api = {
    // Produtos
    listarProdutos: () => ordenarAlfabeticamente(bancoDados.produtos),
    buscarProdutos: (termo) => {
        const termos = normalizarTexto(termo).split(/\s+/).filter(Boolean);
        return ordenarAlfabeticamente(bancoDados.produtos.filter(produto => {
            const textoProduto = normalizarTexto(`${produto.nome} ${produto.termoBusca || ''}`);
            return termos.every(palavra => textoProduto.includes(palavra));
        }));
    },
    filtrarPorCategoria: (categoria) => ordenarAlfabeticamente(bancoDados.produtos.filter(p => p.categoria === categoria)),
    listarCategorias: () => Object.entries(categorias).map(([id, nome]) => ({ id, nome })),
    nomeCategoria: (categoria) => categorias[categoria] || 'Outros',
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
function imagemProdutoHTML(produto) {
    return `<img src="img/produtos/${produto.imagem}.jpg" alt="${produto.nome}" loading="lazy" onerror="this.nextElementSibling.style.display='flex'; this.remove()"><span class="produto-fallback" aria-hidden="true"><i class="bi bi-leaf"></i></span>`;
}