# Nebula v2 — Plataforma SaaS de Hospedagem Premium

> Hospedagem 24/7 para bots de Discord, WhatsApp e Telegram, APIs, sites e servidores VPS — com design glassmorphism e painel completo.

## Stack

- **Next.js 15** (App Router, Server Components)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **motion/react** (animações)
- **Lucide React** (ícones)
- **Geist** (tipografia — via `next/font/google`)

## Design System

O projeto usa um sistema de glassmorphism escuro com as seguintes utilities CSS customizadas:

| Classe | Uso |
|--------|-----|
| `glass` | Cards e painéis semi-transparentes |
| `glass-strong` | Modais, sidebars e overlays |
| `glass-nav` | Barra de navegação |
| `shadow-soft` | Sombra suave com inset highlight |
| `shadow-glow` | Brilho de destaque (plano recomendado) |
| `bg-grid` | Padrão de grid de fundo |
| `text-gradient-silver` | Gradiente prata para headings |

## Estrutura do Projeto

```
nebula-v2/
├── app/                          # Páginas (Next.js App Router)
│   ├── page.tsx                  # Home
│   ├── login/                    # Autenticação
│   ├── registro/                 # Cadastro
│   ├── planos/                   # Planos de hospedagem
│   ├── pagamento/                # Checkout PIX/Cartão
│   ├── dashboard/                # Painel do cliente
│   ├── servidores/               # Gerenciamento de serviços
│   ├── faturas/                  # Faturas e pagamentos
│   ├── suporte/                  # Tickets e chat ao vivo
│   ├── backups/                  # Backups automáticos e manuais
│   ├── logs/                     # Logs de atividade
│   ├── afiliados/                # Programa de afiliados
│   ├── perfil/                   # Perfil do usuário (com tabs)
│   ├── configuracoes/            # Preferências da conta
│   ├── admin/                    # Painel administrativo
│   │   ├── page.tsx              # Dashboard admin
│   │   ├── usuarios/             # Gestão de usuários
│   │   ├── financeiro/           # Relatórios financeiros
│   │   ├── planos/               # CRUD de planos
│   │   ├── cupons/               # CRUD de cupons
│   │   ├── tickets/              # Gestão de tickets
│   │   ├── servidores/           # Gestão de nodes
│   │   ├── logs/                 # Logs de auditoria
│   │   ├── notificacoes/         # Central de notificações
│   │   └── configuracoes/        # Config. do sistema
│   ├── sobre/                    # Sobre a empresa
│   ├── status/                   # Status dos serviços
│   ├── base-de-conhecimento/     # Documentação
│   ├── faq/                      # FAQ
│   ├── blog/                     # Blog
│   ├── carreiras/                # Vagas abertas
│   ├── contato/                  # Formulário de contato
│   ├── termos/                   # Termos de Serviço
│   ├── privacidade/              # Política de Privacidade
│   ├── lgpd/                     # Compliance LGPD
│   └── sla/                      # Service Level Agreement
│
├── components/
│   ├── app/                      # Componentes do painel
│   │   ├── app-shell.tsx         # Layout com sidebar + header
│   │   ├── area-chart.tsx        # Gráficos SVG animados
│   │   └── empty-state.tsx       # Estados vazios
│   ├── auth/                     # Componentes de autenticação
│   ├── home/                     # Seções da landing page
│   ├── motion/                   # Wrappers de animação
│   ├── plans/                    # Cards de planos
│   └── site/                     # Navbar e Footer
│
├── contexts/
│   ├── auth-context.tsx          # Estado global de autenticação
│   └── notification-context.tsx  # Sistema de notificações
│
├── providers/
│   └── index.tsx                 # Composição de providers
│
├── services/
│   └── api.ts                    # Camada de serviço (stubs prontos)
│
├── types/
│   └── index.ts                  # Todos os tipos TypeScript
│
└── lib/
    ├── utils.ts                  # cn(), formatCurrency(), etc.
    └── site.ts                   # Dados estáticos (nav, planos, FAQs)
```

## Começando

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
```

## Integrações Disponíveis (Admin → Config. Sistema)

O painel administrativo em `/admin/configuracoes` → aba "APIs & Integrações" permite configurar:

- **Infraestrutura**: Pterodactyl, Proxmox, Virtualizor
- **DNS/CDN**: Cloudflare
- **Pagamentos**: Mercado Pago, Stripe, Asaas, PayPal
- **Comunicação**: Discord Bot, SMTP
- **Email**: SendGrid, Mailgun

Nenhuma credencial é hardcoded — tudo via variáveis de ambiente.

## Variáveis de Ambiente

```env
NEXT_PUBLIC_API_URL=https://api.seudominio.com
```

## Autenticação Demo

- **Cliente**: qualquer e-mail que **não** contenha "admin"
- **Admin**: e-mail contendo "admin" (ex: `admin@nebula.app`)

Substitua o mock em `contexts/auth-context.tsx` pela chamada real à sua API.

## Deploy

Compatível com Vercel, Railway, Coolify e qualquer plataforma que suporte Next.js.

```bash
npm run build
npm start
```

---

Made with ♥ by Nebula Team — Brasil 🇧🇷
