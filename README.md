# Jornal do Pre-2

Homepage editorial mobile-first para funcionar como um jornal digital da turma do Pre-2, feita com `Next.js`, `TypeScript`, `Tailwind CSS` e `Framer Motion`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Onde editar

- Conteudos e caminhos das imagens: `data/home-content.ts`
- Hero: `components/home/hero-section.tsx`
- Estilos globais: `app/globals.css`
- Imagens locais: `public/images`

## Estrutura

```text
app/
components/home/
data/
public/images/
```

## Publicacao

Este projeto esta pronto para ser publicado em plataformas como Vercel.

### Subir para GitHub

```bash
git init
git add .
git commit -m "feat: initial project"
git branch -M main
git remote add origin <url-do-repositorio>
git push -u origin main
```

### Deploy na Vercel

1. Importe o repositorio no painel da Vercel.
2. A Vercel detecta `Next.js` automaticamente.
3. Use os comandos padrao:
   - Build command: `npm run build`
   - Output: padrao do Next.js

## Observacoes

- O `.gitignore` ja evita subir `node_modules`, `.next` e arquivos locais de ambiente.
- Se voce trocar nomes de imagens em `public/images`, atualize os caminhos em `data/home-content.ts`.
