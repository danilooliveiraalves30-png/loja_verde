# Loja Verde

Aplicação de e-commerce para produtos naturais e suplementos.

## Pré-requisitos

- Node.js e npm instalados
- Um navegador atualizado

## Como executar o frontend

Depois de baixar e extrair o ZIP do repositório:

1. Abra o terminal na pasta principal do projeto, a mesma que contém o arquivo `package.json`.
2. Instale as dependências:

	```bash
	npm install
	```

3. Abra o arquivo `frontend/index.html` no navegador. No Windows, basta clicar duas vezes no arquivo pelo Explorador de Arquivos.

O frontend funciona com HTML, CSS e JavaScript. A instalação das dependências deve ser feita antes de iniciar o projeto, mesmo quando a intenção for apenas abrir o `index.html`.

## Executar pelo servidor local

Como alternativa, também é possível iniciar o servidor Express:

```bash
npm start
```

Depois, acesse `http://localhost:3000` no navegador. Para desenvolvimento com reinício automático do servidor, use:

```bash
npm run dev
```

## Estrutura

- `frontend/` - Interface do cliente (HTML, CSS e JavaScript vanilla)
- `backend/` - API REST com Node.js e Express
- `database/` - Scripts SQL e configuração do banco de dados
- `api/` - Documentação OpenAPI

## Banco de dados

O backend utiliza PostgreSQL. Para iniciar a aplicação completa com o banco configurado, use o Docker Compose:

```bash
docker compose up --build
```

Depois, acesse `http://localhost:3000`.