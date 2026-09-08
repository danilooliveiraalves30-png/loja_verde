# Imagens da Loja Verde

Esta pasta (`frontend/img/`) é onde o front-end busca as fotos da loja.
Todas as imagens já têm um **fallback automático**: se um arquivo não existir,
o site continua funcionando normalmente e mostra um ícone de folha 🌿 (ou o
espaço simplesmente fica vazio) no lugar — nada quebra visualmente. Basta ir
adicionando os arquivos abaixo, com o **nome e a pasta exatos**, que eles
aparecem sozinhos, sem precisar mexer em código.

Formato recomendado: `.jpg` para fotos (produtos, banners) e `.png` para
logo/ilustrações com fundo transparente. Comprima as imagens antes de
adicionar (ex.: TinyPNG/Squoosh) para o site carregar rápido.

## 1. Fotos de produto — ✅ recebidas
O catálogo foi reduzido para 6 produtos e as fotos abaixo já foram
adicionadas em `img/produtos/`:

| Arquivo | Produto |
|---|---|
| `granola.jpg` | Granola |
| `castanhas.jpg` | Castanhas |
| `proteina-ervilha.jpg` | Proteína Ervilha 500g |
| `proteina-soja.jpg` | Proteína Soja 1kg |
| `proteina-arroz.jpg` | Proteína Arroz 450g |
| `whey-natural.jpg` | Whey Protein Natural 900g |

Se um dia trocar a foto de algum produto, é só sobrescrever o arquivo com o
mesmo nome (formato `.jpg`, de preferência quadrado, mínimo 600×600px).

## 2. Banners — prioridade média
Pasta: `img/banners/` · formato: `.jpg` · paisagem (16:9 ou similar).

| Arquivo | Onde aparece | Sugestão de conteúdo |
|---|---|---|
| `hero.jpg` | Fundo do banner "Loja Verde" na tela Início | Folhas, ervas ou mesa com produtos naturais (fica com um filtro verde escuro por cima, então funciona melhor com uma foto bem iluminada) |
| `promo-whey.jpg` | Fundo do card de promoção "Whey Protein" | Foto do pote/embalagem de whey protein ou pessoa treinando |

## 3. Logo e identidade — opcional
Pasta: `img/` (raiz da pasta de imagens) · formato: `.png` com fundo
transparente.

| Arquivo | Onde aparece | Tamanho sugerido |
|---|---|---|
| `logo.png` | Ao lado do título "Loja Verde" no banner | 64×64px |
| `favicon.png` | Aba do navegador | 32×32px ou 64×64px |

## 4. Ilustrações de estado vazio — opcional (mas melhora bastante a experiência)
Pasta: `img/ilustracoes/` · formato: `.png` com fundo transparente.

| Arquivo | Onde aparece |
|---|---|
| `carrinho-vazio.png` | Tela do Carrinho, quando não há itens |
| `busca-vazia.png` | Tela de Busca, quando a pesquisa não encontra nada |
| `mapa-entrega.jpg` | Fundo do card "Mapa de entrega" na tela Acompanhar Entrega (pode ser uma ilustração de mapa/rota ou print estilizado) — use `.jpg` |

## 5. Entregador — opcional
Pasta: `img/entregadores/` · formato: `.jpg` · quadrada (1:1).

| Arquivo | Onde aparece |
|---|---|
| `carlos.jpg` | Avatar do entregador na tela de Acompanhar Entrega |

---

### Resumo rápido (o que baixar primeiro)
Se quiser priorizar, comece pelas 9 fotos de produto (item 1) — são as que
mais aparecem e mais afetam a primeira impressão da loja. Banners, logo e
ilustrações podem vir depois.
