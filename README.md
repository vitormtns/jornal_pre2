# Jornal do Pré-2

Homepage editorial mobile-first para funcionar como um jornal digital da turma do Pré-2, feita com `Next.js`, `TypeScript`, `Tailwind CSS` e `Framer Motion`.

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

- Conteúdos e caminhos das imagens: `data/home-content.ts`
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

## Publicação

Este projeto está pronto para ser publicado em plataformas como Vercel.

### Subir para GitHub

```bash
git init
git add .
git commit -m "feat: initial project"
git branch -M main
git remote add origin <url-do-repositório>
git push -u origin main
```

### Deploy na Vercel

1. Importe o repositório no painel da Vercel.
2. A Vercel detecta `Next.js` automaticamente.
3. Use os comandos padrão:
   - Build command: `npm run build`
   - Output: padrão do Next.js

## Observações

- O `.gitignore` já evita subir `node_modules`, `.next` e arquivos locais de ambiente.
- Se você trocar nomes de imagens em `public/images`, atualize os caminhos em `data/home-content.ts`.
