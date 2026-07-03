@AGENTS.md

# Vitaly Aparelhos Auditivos — site institucional

Landing page da clínica Vitaly Aparelhos Auditivos (Goiânia/GO), com foco em
conversão via WhatsApp para tráfego pago (Google Ads) e SEO local.

## Stack

- **Next.js 16 (App Router) + TypeScript** — site estático de página única,
  sem CMS e sem banco de dados por enquanto.
- **Tailwind CSS v4** — configurado via CSS (`@theme` em `src/app/globals.css`),
  não existe `tailwind.config.ts` nesta versão.
- **lucide-react** — ícones genéricos de UI. Ícones de marcas (WhatsApp,
  Instagram, Facebook) são SVGs próprios em `src/components/shared/`, pois a
  versão atual do lucide-react não inclui mais ícones de marcas.
- **Supabase** — reservado para quando o projeto precisar persistir dados
  (não usado ainda).
- **Deploy**: Vercel, conectado ao repositório no GitHub
  (`github.com/marketingimperiosites/vitaly-aparelhos-auditivos`) — todo push
  na branch `master` gera um novo deploy automaticamente.

## Comandos

```
npm run dev      # ambiente de desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # roda o build de produção localmente
npm run lint     # ESLint
```

## Convenções

- Componentes React em `PascalCase.tsx`; dados e utilitários em
  `kebab-case.ts`. Export nomeado (não default), exceto em `app/page.tsx` e
  `app/layout.tsx` (exigência do Next.js).
- **Server Components por padrão.** Só usar `"use client"` quando o
  componente precisa de estado/interatividade no navegador (ex: `Header`
  com menu mobile, `Faq` com acordeão, `QuizContainer`). Isso mantém o JS
  enviado ao cliente no mínimo — importante para tráfego pago mobile.
- **Cores da marca**: sempre usar os tokens `brand-pink` / `brand-blue`
  (e variantes `-dark` / `-light`) definidos em `globals.css`, nunca hex
  direto no JSX.
- **Conteúdo editável fica em `src/data/`**, separado de componentes e
  lógica:
  - `contato.ts` — telefone, e-mail, endereço, redes sociais (fonte única)
  - `navegacao.ts` — itens do menu
  - `servicos.ts`, `faq.ts`, `quiz-perguntas.ts`, `marcas-parceiras.ts`
- **Links de WhatsApp**: sempre usar `gerarLinkWhatsApp()` de
  `src/lib/whatsapp.ts` — nunca montar a URL `wa.me` manualmente.
- Formulário/CTA de contato é só WhatsApp (sem backend de e-mail).

## Pendências conhecidas (perguntar ao cliente)

- `public/hero-vitaly-mobile.png` já foi enviada pelo cliente mas ainda não
  foi aplicada — o Hero só usa imagem de fundo real a partir do breakpoint
  `lg` (desktop); no mobile ainda usa o fundo abstrato de fallback.
- Domínio definitivo (ex: vitalyaparelhosauditivos.com.br) ainda não
  conectado na Vercel — o site está publicado só no link provisório
  `*.vercel.app`.

## Regras de trabalho (combinadas com o cliente)

- Sempre mostrar o plano e esperar aprovação antes de construir algo novo.
- Uma mudança por vez; não alterar o que não foi pedido.
- Commits claros a cada mudança aprovada (feat/fix/refactor/chore); nunca
  dar `push` sem revisão do cliente.
- Segredos só em variáveis de ambiente (`.env.local`, nunca commitado);
  nenhuma variável sensível com prefixo `NEXT_PUBLIC_`.
- Explicar erros em português simples antes de corrigir.
- Design capricho e mobile-first — testar em desktop e mobile antes de
  considerar uma seção pronta.
