# ☕ Aroma Beans Coffee Chatbot Inteligente

<br/>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/Gemini_API-191E24?style=for-the-badge&logo=google&logoColor=white" alt="Gemini API Badge"/>
</p>

<br/>

<br/>

## Visão Geral

Este projeto é um *chatbot* interativo construído com **React** e impulsionado pela **API do Google Gemini 1.5 Flash**. Ele simula um assistente virtual para a cafeteria Aroma Beans Coffee, combinando a inteligência da IA com funcionalidades de front-end dinâmicas.

## ✨ Principais Funcionalidades

* **Inteligência Gemini:** O chatbot responde a perguntas sobre o menu, horários e localização da cafeteria.
* **Customização da Interface:** O assistente pode processar comandos para mudar as cores do tema da página em tempo real.
* **Interação por Voz:** Funcionalidade de **Speech-to-Text** integrada (microfone) para uma experiência de conversação mais natural.
* **Criação de Conteúdo:** Gera sugestões de bebidas e poemas temáticos, demonstrando as capacidades multimodais da IA.

## 🛠️ Tecnologias

* **Front-end:** ReactJS com Vite
* **IA:** Google Gemini API (`gemini-1.5-flash` e `gemini-1.5-flash-tts`)
* **Deployment:** `gh-pages` para GitHub Pages

## 🚀 Como Executar Localmente

### Pré-requisitos
Você precisará de uma chave da API do Google AI Studio.

### Configuração

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <nome_do_seu_repositorio>
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz e adicione sua chave Gemini:
    ```
    VITE_API_KEY="SUA_CHAVE_AQUI"
    ```

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Deploy
Para publicar no GitHub Pages, use:

```bash
npm run deploy
