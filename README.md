# Dashboard de Ônibus SPTrans

## Descrição do Projeto

Este projeto é uma prática de aplicação Full Stack que exibe informações em gráficos dinâmicos sobre linhas de ônibus da SPTrans. Ele é composto por:

- **Frontend**: Aplicação React que apresenta o dashboard com gráficos, menus e dados visuais.
- **Backend**: API REST em Node.js com Express que fornece os dados para o frontend consumir.

O objetivo é oferecer uma interface visual para acompanhar dados de linhas de ônibus, consumindo informações dinâmicas do backend.

---

## Tecnologias Utilizadas

- React 19, React Router Dom 7, Tailwind CSS, Vite, Recharts, Framer Motion (frontend)
- Node.js e Express (backend)
- Deploy no Vercel (frontend) e Render (backend)

---

## Como o gráfico funciona

O gráfico no frontend depende dos dados fornecidos pela API no backend. O frontend faz uma requisição HTTP para a rota `/onibus` do backend para obter as informações que serão exibidas.

## Por que o gráfico pode não aparecer?

### 1. **API backend inacessível**

Quando você acessa o frontend via deploy (exemplo: no Vercel), o frontend precisa buscar dados do backend. Se a URL da API estiver apontando para `localhost:3001`, o navegador do usuário vai tentar buscar dados no **computador dele** (localhost) e não no seu servidor, pois `localhost` é sempre a própria máquina que está acessando o site.

Como não existe servidor rodando no computador do usuário, a requisição falha (erro `ERR_CONNECTION_REFUSED`) e o gráfico não carrega.

### 2. **CORS não configurado**

Se o backend não estiver configurado para permitir requisições do domínio do frontend (Vercel), o navegador bloqueia a requisição por segurança (Cross-Origin Resource Sharing). Isso gera erros no console e impede que os dados sejam carregados.

### 3. **URL da API incorreta no frontend**

Se a variável que define a URL da API não estiver atualizada para o endereço correto do backend deployado, o frontend continuará tentando buscar dados no endereço errado, e o gráfico não será exibido.

---
## Como corrigir e garantir que o gráfico funcione no deploy

###  Configurar a URL da API no frontend

- passo 1: Crie um arquivo `.env` no frontend com a variável de ambiente da API
- passo 2: Passo 2: Configurar CORS no backend
- passo 3: Verificar se o backend está rodando no Render
- passo 4: Atualizar e redeployar o frontend no Vercel
