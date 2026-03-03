![Logo Vittare](./public/logo-navbar-black.png)

## 🏗️ Visão Geral
Este é o frontend institucional da **Vittare**, um sistema para gerenciamento de usuários, produtos e categorias relacionados a seguros de automóveis. A aplicação permite o cadastro de usuários com informações do veículo, a gestão de produtos de seguro e suas categorias, além de consultas específicas como listagem de produtos ativos e cálculo de descontos com base no ano do carro.


---
## 🧠 Arquitetura do Projeto
O projeto segue uma estrutura modular para facilitar a manutenção e o crescimento sustentável do código.


## 📁 Estrutura de Diretórios

```bash
src/
├── app/                    # Configuração global
│   ├── App.tsx
│   ├── main.tsx
│   ├── routes.tsx
│   └── providers.tsx
│
├── assets/                 # Imagens, SVGs, fontes
│
├── components/             # Componentes reutilizáveis globais
│   ├── ui/                 # Botões, inputs, cards
│   └── layout/             # Navbar, Footer, Sidebar
│
├── features/               # Organização por domínio
│   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types.ts
│   │   └── hooks.ts
│   │
│   └── seguros/
│       ├── pages/
│       ├── components/
│       ├── services/
│       ├── types.ts
│       └── hooks.ts
│
├── hooks/                  # Hooks globais
├── services/               # Configurações globais (ex: api.ts)
├── types/                  # Tipagens globais
├── utils/                  # Funções utilitárias
└── styles/                 # CSS global
```

---

## 💻 Stack Tecnológica

### Core
* **React 19**: Biblioteca base para construção de interfaces.
* **TypeScript (~5.9.3)**: Garantia de segurança de tipos e melhor intellisense.
* **Vite 7**: Ferramenta de build de última geração para desenvolvimento ultra-rápido.

### Estilização e UI
* **Tailwind CSS 4**: Framework utility-first para design responsivo e ágil.
* **Framer Motion**: Biblioteca para animações e transições fluidas.
* **Lucide-React & Phosphor Icons**: Conjuntos de ícones vetoriais modernos.
* **React-Toastify**: Sistema de notificações e alertas visuais.

### Navegação e Qualidade
* **React Router Dom 7**: Gerenciamento de rotas e navegação SPA.
* **ESLint 9**: Padronização de código e prevenção de erros estáticos.

---

## 🚀 Como Rodar o Projeto

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Iniciar ambiente de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Gerar build de produção:**
    ```bash
    npm run build
    ```

4.  **Verificar erros de linting:**
    ```bash
    npm run lint
    ```

---

## 📈 Características Técnicas
* **SPA Moderna**: Navegação instantânea sem recarregamento de página.
* **Design Responsivo**: Adaptado para diversos tamanhos de tela através do Tailwind.
* **Build Otimizado**: Aproveita o poder do Vite para entregar um bundle leve.

---

## 🏢 Responsável pelo Desenvolvimento

O projeto foi planejado e executado por: Ana Beatriz Monteiro, Andreza Luiza, César Henrique, João Henrique, Josenil Soares, Raylander Ribeiro e Stephanie Mayara 

**Axiom Software Developers**

![Logo Axiom](./public/axiom-footer.png)