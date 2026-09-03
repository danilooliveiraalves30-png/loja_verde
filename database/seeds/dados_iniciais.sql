-- ============================================================
-- DADOS INICIAIS - LOJA VERDE
-- ============================================================

-- ============================================================
-- PRODUTOS
-- ============================================================

INSERT INTO produtos
(nome, preco, categoria, imagem, avaliacao, avaliacoes, destaque, promocao, termo_busca, descricao)
VALUES
(
    'Granola',
    24.90,
    'organicos',
    'granola',
    4.5,
    128,
    TRUE,
    FALSE,
    NULL,
    'Granola artesanal crocante, feita com aveia integral, mel, castanhas e sementes. Ideal para café da manhã ou lanche saudável.'
),
(
    'Castanhas',
    18.50,
    'naturais',
    'castanhas',
    4.7,
    95,
    TRUE,
    FALSE,
    NULL,
    'Castanhas de caju selecionadas, torradas sem óleo. Fonte natural de gorduras boas e minerais essenciais.'
),
(
    'Proteína Ervilha 500g',
    89.90,
    'suplementos',
    'proteina-ervilha',
    4.8,
    203,
    FALSE,
    FALSE,
    'proteína vegetal',
    'Proteína isolada de ervilha amarela de alta pureza. Alternativa vegana completa com todos os aminoácidos essenciais.'
),
(
    'Proteína Soja 1kg',
    129.00,
    'suplementos',
    'proteina-soja',
    4.6,
    156,
    FALSE,
    FALSE,
    'proteína vegetal',
    'Proteína isolada de soja com 90% de concentração. Isenta de lactose e ideal para dietas restritivas.'
),
(
    'Proteína Arroz 450g',
    74.50,
    'suplementos',
    'proteina-arroz',
    4.5,
    89,
    FALSE,
    FALSE,
    'proteína vegetal',
    'Proteína de arroz integral fermentada. Hipoalergênica e de fácil digestão, ideal para atletas sensíveis.'
),
(
    'Mix Vegan Protein',
    99.00,
    'suplementos',
    'mix-vegan',
    4.9,
    312,
    FALSE,
    FALSE,
    'proteína vegetal',
    'Blend premium de proteínas vegetais (ervilha, arroz, cânhamo) com BCAA e creatina veganos. Fórmula completa para performance.'
),
(
    'Whey Protein Natural 900g',
    149.90,
    'suplementos',
    'whey-natural',
    4.8,
    231,
    FALSE,
    TRUE,
    NULL,
    'Whey Protein concentrado de alta qualidade, extraído do soro do leite de vacas leiteiras. Sem adição de açúcares e aromatizantes artificiais.'
),
(
    'Granola Orgânica 500g',
    24.90,
    'organicos',
    'granola-organica',
    4.6,
    78,
    FALSE,
    FALSE,
    NULL,
    'Granola 100% orgânica certificada, produzida com ingredientes de agricultura biodinâmica. Crocante e naturalmente doce.'
),
(
    'Castanha do Pará 200g',
    18.50,
    'naturais',
    'castanha-para',
    4.7,
    145,
    FALSE,
    FALSE,
    NULL,
    'Castanha do Pará selvagem da Amazônia. A castanha mais rica em selênio do mundo, essencial para saúde da tireoide.'
);

-- ============================================================
-- INFORMAÇÕES NUTRICIONAIS
-- ============================================================

INSERT INTO produto_nutricional
(produto_id, nutriente, por_100g, vd)
VALUES

-- Produto 1 - Granola
(1, 'Valor Energético', '433 kcal', '22%'),
(1, 'Carboidratos', '68g', '23%'),
(1, 'Proteínas', '10g', '13%'),
(1, 'Gorduras Totais', '12g', '22%'),
(1, 'Fibras', '8g', '32%'),
(1, 'Sódio', '45mg', '2%'),

-- Produto 2 - Castanhas
(2, 'Valor Energético', '650 kcal', '33%'),
(2, 'Proteínas', '15g', '20%'),
(2, 'Gorduras Totais', '63g', '115%'),
(2, 'Carboidratos', '16g', '5%'),
(2, 'Fibras', '8g', '32%'),
(2, 'Magnésio', '250mg', '67%'),

-- Produto 3 - Proteína Ervilha
(3, 'Valor Energético', '380 kcal', '19%'),
(3, 'Proteínas', '80g', '107%'),
(3, 'Carboidratos', '5g', '2%'),
(3, 'Gorduras Totais', '3g', '5%'),
(3, 'Sódio', '350mg', '15%'),
(3, 'Ferro', '15mg', '83%'),

-- Produto 4 - Proteína Soja
(4, 'Valor Energético', '370 kcal', '19%'),
(4, 'Proteínas', '90g', '120%'),
(4, 'Carboidratos', '0g', '0%'),
(4, 'Gorduras Totais', '1g', '2%'),
(4, 'Cálcio', '200mg', '20%'),
(4, 'Isoflavonas', '50mg', '-'),

-- Produto 5 - Proteína Arroz
(5, 'Valor Energético', '390 kcal', '20%'),
(5, 'Proteínas', '85g', '113%'),
(5, 'Carboidratos', '4g', '1%'),
(5, 'Gorduras Totais', '2g', '4%'),
(5, 'Vitamina B12', '2,5mcg', '104%'),
(5, 'Zinco', '8mg', '73%'),

-- Produto 6 - Mix Vegan Protein
(6, 'Valor Energético', '385 kcal', '19%'),
(6, 'Proteínas', '75g', '100%'),
(6, 'Carboidratos', '8g', '3%'),
(6, 'Gorduras Totais', '4g', '7%'),
(6, 'BCAA', '15g', '-'),
(6, 'Creatina', '3g', '-'),

-- Produto 7 - Whey Protein Natural
(7, 'Valor Energético', '400 kcal', '20%'),
(7, 'Proteínas', '80g', '107%'),
(7, 'Carboidratos', '6,7g', '2%'),
(7, 'Gorduras Totais', '5g', '9%'),
(7, 'Gorduras Saturadas', '2,5g', '11%'),
(7, 'Sódio', '200mg', '8%'),

-- Produto 8 - Granola Orgânica
(8, 'Valor Energético', '420 kcal', '21%'),
(8, 'Carboidratos', '65g', '22%'),
(8, 'Proteínas', '12g', '16%'),
(8, 'Gorduras Totais', '14g', '25%'),
(8, 'Fibras', '10g', '40%'),
(8, 'Ômega-3', '1,2g', '-'),

-- Produto 9 - Castanha do Pará
(9, 'Valor Energético', '680 kcal', '34%'),
(9, 'Proteínas', '14g', '19%'),
(9, 'Gorduras Totais', '67g', '122%'),
(9, 'Selênio', '1900mcg', '3455%'),
(9, 'Fósforo', '590mg', '59%'),
(9, 'Vitamina E', '7,2mg', '48%');

-- ============================================================
-- BENEFÍCIOS DOS PRODUTOS
-- ============================================================

INSERT INTO produto_beneficios
(produto_id, beneficio)
VALUES

-- Produto 1 - Granola
(1, 'Fonte de fibras que auxiliam na digestão'),
(1, 'Energia sustentada ao longo do dia'),
(1, 'Rica em ômegas 3 e 6 das sementes'),
(1, 'Sem conservantes artificiais'),
(1, 'Pode ser consumida com iogurte, leite ou frutas'),

-- Produto 2 - Castanhas
(2, 'Rica em triptofano que auxilia no humor'),
(2, 'Fonte de magnésio para saúde muscular'),
(2, 'Gorduras insaturadas que protegem o coração'),
(2, 'Antioxidantes naturais'),
(2, 'Excelente para lanches entre as refeições'),

-- Produto 3 - Proteína Ervilha
(3, 'Perfil aminoacídico completo'),
(3, 'Fácil digestão e absorção'),
(3, 'Rica em ferro para veganos'),
(3, 'Não contém alérgenos comuns'),
(3, 'Auxilia na recuperação muscular'),

-- Produto 4 - Proteína Soja
(4, 'Maior concentração de proteína vegetal'),
(4, 'Fonte de cálcio para ossos'),
(4, 'Isoflavonas que auxiliam na saúde hormonal'),
(4, 'Zero açúcar e lactose'),
(4, 'Custo-benefício superior'),

-- Produto 5 - Proteína Arroz
(5, 'Hipoalergênica e leve'),
(5, 'Enriquecida com vitamina B12'),
(5, 'Fonte de zinco para imunidade'),
(5, 'Sabor neutro que se mistura facilmente'),
(5, 'Sustentável e eco-friendly'),

-- Produto 6 - Mix Vegan Protein
(6, 'Sinergia de fontes proteicas vegetais'),
(6, 'BCAA e creatina para performance'),
(6, 'Sabor chocolate belga cremoso'),
(6, 'Dissolução perfeita sem grumos'),
(6, 'Testada em laboratório independente'),

-- Produto 7 - Whey Protein Natural
(7, 'Auxilia no ganho de massa magra'),
(7, 'Recuperação muscular acelerada'),
(7, 'Promove saciedade prolongada'),
(7, 'Rico em aminoácidos essenciais e BCAAs'),
(7, 'Sem glúten e sem adição de açúcar'),

-- Produto 8 - Granola Orgânica
(8, 'Ingredientes 100% orgânicos certificados'),
(8, 'Maior teor de fibras que granola comum'),
(8, 'Rica em ômega-3 de sementes'),
(8, 'Sem agrotóxicos ou conservantes'),
(8, 'Apoio à agricultura sustentável'),

-- Produto 9 - Castanha do Pará
(9, 'Maior fonte natural de selênio do planeta'),
(9, 'Antioxidante poderoso'),
(9, 'Protege a saúde da tireoide'),
(9, 'Fonte de vitamina E para pele'),
(9, 'Sustentabilidade da floresta amazônica');