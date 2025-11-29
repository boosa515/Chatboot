# < Chatbot Aroma Beans > ☕
<br/>
<br/>
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini Badge"/>
  <img src="https://img.shields.io/badge/Web_App-D057A7?style=for-the-badge" alt="Web App Badge"/>
</p>
<br/>

<br/>
<br/>

## Download
<p align=>
  <strong>Código:</strong> <a href="https://github.com/boosa515/Chatboot/archive/refs/heads/main.zip"><strong>Clique Aqui (Código-Fonte)</strong></a>
</p>

<br/>

## 💡 Sobre o Projeto

Assistente virtual inteligente desenvolvido em **React** com **Vite**, criado para a cafeteria fictícia **Aroma Beans**.

O principal diferencial é a integração com a **API do Google Gemini**, que fornece ao chatbot uma personalidade de barista especialista, capaz de sugerir harmonizações e responder dúvidas sobre o cardápio. A aplicação é uma **SPA (Single Page Application)** completa, com navegação fluida e design temático responsivo.
<br/>
<br/>

## Teste do software

  <strong>Video:</strong> <a href="#"><strong>Clique Aqui (Insira o link do seu vídeo)</strong></a>
<br/>
<br/>

## ⚙️ Principais Funcionalidades

* **IA Generativa:** Chatbot integrado ao Google Gemini 1.5 Flash, configurado com instruções de sistema personalizadas (Persona de Barista).
* **Navegação SPA:** Sistema de rotas (Home, Menu, História) utilizando `react-router-dom` sem recarregamento de página.
* **Interface Temática:** Design System próprio baseado em tons de café (Espresso e Cobre), com componentes visuais como Cards e Botões estilizados.
* **Scroll Inteligente:** Funcionalidade de "Scroll To Top" automática ao navegar entre as páginas.
* **Formatação Rica:** O chat processa e formata automaticamente as respostas da IA (negrito, listas) para melhor leitura.
* **Responsividade:** Layout totalmente adaptável para dispositivos móveis e desktops.

<br/>
<br/>

## Pré-requisitos

* Node.js (v18 ou superior)
* Chave de API do Google Gemini (AI Studio)

<br/>
<br/>

# 1. Configurar o Ambiente

Assumindo que você já clonou o repositório e está no diretório do projeto:

  Instala as dependências do projeto
  ```bash
  npm install
```
  Configura a API Key Crie um arquivo chamado .env na raiz do projeto e adicione sua chave:

  ```bash
VITE_API_URL=[https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=SUA_CHAVE_AQUI]
```
<br/>
<br/>

# 2. Rodar a Aplicação

Com as dependências instaladas e a chave configurada:

Inicia o servidor de desenvolvimento
  ```bash
npm run dev
```
Acesso
  ```bash
O projeto estará disponível em http://localhost:5173/ (ou a porta indicada no terminal).
```