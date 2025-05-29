# Next Template App

Este é um template base para aplicações Next.js com diversas ferramentas já configuradas.

## 🚀 Como começar

Clone o repositório:

```bash
git clone https://github.com/erivaldocazinga22/next-template-app
```

Adiciona o teu repositório remoto:

```bash
git remote add origin https://github.com/<seu-usuario-do-github>/<nome-do-repositorio>.git
git branch -M main
git push -u origin main
```

## 🔐 Variáveis de Ambiente

Após clonares o projeto, cria um ficheiro `.env` na raiz e adiciona:

```env
NEXT_PUBLIC_API_URL=http://localhost:5500 # Aqui vai a URL da tua API para acesso publico no next
NEXT_API_URL=http://localhost:5500 # Aqui vai a URL da tua API
```

## ⚙️ Configurações incluídas

Este template já vem pré-configurado com as seguintes ferramentas:

1. ✅ **Testes unitários com [`Vitest`](https://vitest.dev/guide/)**
2. 🧹 **Linting com [`Biome`](https://biomejs.dev/guides/getting-started/)**
3. 🔐 **Hooks de pré-commit com [`Husky`](htts://typicode.github.io/husky)**
   * Validação de mensagens de commit com [`Commitlint`](https://commitlit.js.org/)
   * Seguindo o padrão [`Conventional Commits`](https://www.conventionalcommits.org/)
4. ⚙️ **CI/CD pré-configurado com GitHub Actions**
5. 🔒 **Rotas privadas usando Middleware do Next.js**
6. 💅 **UI moderna com [`shadcn/ui`](https://ui.shadcn.dev/)**
7. 🎨 **Estilização com [`Tailwind CSS`](https://tailwindcss.com/docs/installation/framework-guides/nextjs)**

## 🐳 Usar com Docker

Este projeto já vem pronto para ser executado com Docker e Docker Compose.

### 1. Requisitos

* Docker instalado [https://www.docker.com](https://www.docker.com)
* Docker Compose (v2 ou superior)
* PNPM está embutido via Corepack, não precisas instalar manualmente

### 2. Build da imagem

```bash
docker compose build
```

### 3. Subir o container

```bash
docker compose up
```

### 4. Acessar a aplicação

A aplicação estará disponível em:

```
http://localhost:3000
```

### 5. Parar o container

```bash
docker compose down
```

> ℹ️ As variáveis de ambiente `NEXT_PUBLIC_API_URL` e `NEXT_API_URL` (definida no `.env`) devem apontar para a tua API — ajusta se necessário antes de buildar.
