# Godinho Advocacia — Landing Page

Site em React + Vite + Tailwind CSS + React Router para o escritório Godinho Advocacia e Assessoria Jurídica.

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam na pasta `dist/`. O `npm run build` já roda `npm run sitemap` automaticamente antes (gera `public/sitemap.xml` a partir das áreas, advogados e posts do blog cadastrados em `content.js`).

**Importante — hospedagem:** como o site agora usa rotas (páginas de área, de advogado e de blog), o servidor de produção precisa redirecionar todas as rotas para `index.html` (SPA). Já incluímos:
- `public/_redirects` (Netlify)
- `vercel.json` (Vercel)
- `public/404.html` + script no `index.html` (GitHub Pages — veja a seção abaixo)

Se for hospedar em outro serviço (Nginx, Apache, cPanel), configure o equivalente a "fallback para index.html em rotas não encontradas".

## Deploy no GitHub Pages

O projeto já está configurado para o repositório se chamar **`godinho-landing`**. Se você criar o repositório com outro nome, ajuste `base` em `vite.config.js` (linha `const base = '/godinho-landing/'`) para `'/nome-do-repositorio/'`.

### Passo a passo

1. **Crie o repositório no GitHub** (pelo site: New repository → nome `godinho-landing` → público ou privado, tanto faz).
2. **Suba o código:**
   ```bash
   cd godinho-landing
   git init
   git add .
   git commit -m "Site Godinho Advocacia"
   git branch -M main
   git remote add origin https://github.com/marlondcury/godinho-landing.git
   git push -u origin main
   ```
3. **Ative o GitHub Pages com deploy automático:** no repositório, vá em Settings → Pages → em "Build and deployment", em **Source** escolha **GitHub Actions**. Não precisa escolher branch nem pasta — o workflow em `.github/workflows/deploy.yml` (já incluído) cuida disso: a cada push na `main`, ele builda o site e publica.
4. Depois do primeiro push, acompanhe em Settings → Pages ou na aba **Actions** do repositório — em 1-2 minutos o site fica no ar em `https://marlondcury.github.io/godinho-landing/`.

Todas as URLs de SEO (canonical, sitemap, dados estruturados, Open Graph) já estão configuradas com `https://marlondcury.github.io/godinho-landing` — não precisa trocar mais nada.

### Domínio próprio no GitHub Pages (opcional)

Se um dia apontar um domínio próprio (ex. `godinhoadvocacia.adv.br`) para o GitHub Pages, o site passa a ficar na raiz do domínio, não numa subpasta. Nesse caso:
- Mude `base` em `vite.config.js` para `'/'`.
- Troque `https://marlondcury.github.io/godinho-landing` pelo domínio próprio nos 3 arquivos: `src/data/content.js` (campo `firm.siteUrl`), `index.html` (`canonical` e `og:image`) e `public/robots.txt` (linha `Sitemap:`). Depois rode `npm run sitemap` de novo.
- Crie um arquivo `public/CNAME` com o domínio dentro (uma linha, ex. `godinhoadvocacia.adv.br`).
- Configure o DNS do domínio apontando para o GitHub Pages (registros A/AAAA ou CNAME, conforme a documentação do GitHub).

## Páginas

- `/` — página inicial (hero, sobre, áreas, equipe, blog em destaque, contato)
- `/areas/:slug` — página de cada área de atuação (inclui a Ação Rio Doce)
- `/equipe/:slug` — página pessoal de cada advogado
- `/blog` — lista de artigos
- `/blog/:slug` — artigo individual

## Editar conteúdo

Todos os textos, contatos, áreas de atuação, biografias da equipe e posts do blog estão centralizados em:

```
src/data/content.js
```

Edite esse arquivo para atualizar telefone, endereço, redes sociais, áreas de atuação, equipe e artigos do blog sem precisar mexer nos componentes/páginas.

## Redes sociais

Os links de Instagram, Facebook e Jusbrasil ficam em `firm` (dentro de `content.js`) e aparecem como ícones no cabeçalho e no rodapé. Confirme se os links estão corretos antes de publicar.

## Imagens

As imagens (logo, foto de grupo e retratos individuais) estão em `src/assets/`, já comprimidas para carregamento rápido (JPEGs otimizados, ~35-55 KB cada em vez dos PNGs originais de 400-700 KB). Os retratos de César, Celton e Caroline foram recortados a partir das artes de divulgação enviadas. Para trocar por fotos em melhor resolução, substitua os arquivos mantendo os mesmos nomes:

- `logo.png` / `logo-white.png` (logo em preto e em branco, para fundos escuros)
- `team-group.jpg` (foto do grupo, usada no Hero e na seção Sobre)
- `cesar-crop.jpg`, `celton-crop.jpg`, `caroline-crop.jpg` (retratos da equipe)

Há também uma cópia com nomes estáveis em `public/images/` (`logo.png`, `team-group.jpg`, `cesar.jpg`, `celton.jpg`, `caroline.jpg`, `og-image.jpg`) — usada nos dados estruturados (JSON-LD), no favicon e na imagem de compartilhamento (Open Graph). Se trocar as fotos, atualize os dois lugares.

## Estrutura

```
src/
  components/   Header, Hero, About, PracticeAreas, Team, WhyUs, BlogPreview,
                CtaBanner, Contact, Footer, WhatsAppButton, SocialIcons,
                PageHeader, ScrollManager, Seo
  pages/        Home, AreaPage, LawyerPage, BlogListPage, BlogPostPage
  data/         content.js (textos, áreas, equipe e blog centralizados)
  utils/        format.js, schema.js (geradores de JSON-LD)
  assets/       imagens
public/
  images/       imagens com nomes estáveis (OG, JSON-LD, favicon)
  robots.txt, sitemap.xml (gerado), _redirects
scripts/
  generate-sitemap.js
```

## SEO — o que foi feito

O site foi otimizado para aparecer em buscas do tipo **"advogado em Governador Valadares"** e **"advogado + área + Governador Valadares"** (ex.: "advogado de família Governador Valadares", "advogado criminalista Governador Valadares"):

- **Título e descrição únicos por página** (via `react-helmet-async`): cada área de atuação, cada advogado e cada post do blog tem seu próprio `<title>` e meta description com palavras-chave locais. Edite em `content.js` (campos `seoTitle` / `seoDescription`).
- **Dados estruturados (JSON-LD)**, em `src/utils/schema.js`:
  - `Attorney` (LocalBusiness) na home, com endereço, telefone, geolocalização e áreas atendidas — o dado mais importante para o Google entender "escritório de advocacia em Governador Valadares".
  - `Person` em cada página de advogado, `Service` em cada página de área, `Article` em cada post do blog, `BreadcrumbList` nas páginas internas.
- **`sitemap.xml`** gerado automaticamente com todas as 21 URLs do site e **`robots.txt`** liberando indexação e apontando para o sitemap.
- **Open Graph / Twitter Cards** com imagem própria (`public/images/og-image.jpg`) para quando o link for compartilhado.
- **Imagens comprimidas** (~35-55 KB cada, antes 400-700 KB) e carregamento lazy nas fotos fora da primeira tela — página mais rápida, o que também ajuda no ranqueamento (Core Web Vitals).
- **Meta tags de geolocalização** (`geo.region`, `geo.placename`, `geo.position`) reforçando Governador Valadares/MG.

### Antes de publicar, você precisa:

1. **Ajustar a geolocalização exata.** Usei a coordenada aproximada do centro de Governador Valadares (`firm.geo` em `content.js`). Pegue o geocode exato do endereço no Google Maps (clique com o botão direito no prédio → copiar coordenadas) e atualize.
2. **Criar/reivindicar o Google Perfil da Empresa (Google Business Profile).** Para buscas locais como "advogado em Governador Valadares", o **Google Maps/pacote local** costuma pesar mais que o site em si. Um perfil completo e verificado (nome, endereço, telefone idênticos aos do site, categoria "Advogado", fotos, horário de funcionamento, e principalmente avaliações de clientes) é o maior fator isolado de ranqueamento local.
3. **Submeter o site ao Google Search Console** e enviar o `sitemap.xml` por lá — acelera a indexação das páginas novas.
4. **Manter NAP consistente** (Nome, Endereço, Telefone) idêntico em todos os lugares: site, Google Business Profile, Instagram, Facebook e Jusbrasil. Inconsistência de endereço/telefone entre essas fontes prejudica o SEO local.

### Limitação técnica a saber

Este é um site "client-side" (React puro, sem servidor renderizando as páginas prontas). O Google consegue executar o JavaScript e ler os títulos/descrições/dados estruturados de cada página normalmente, mas robôs que **não** executam JavaScript — como o preview de link do WhatsApp, Facebook ou Twitter/X — só enxergam a tag padrão definida no `index.html` (a mesma para todas as páginas). Ou seja: o SEO no Google funciona bem por página, mas o preview ao compartilhar um link específico (ex.: de uma área ou de um post do blog) no WhatsApp sempre vai mostrar o título/imagem genéricos do site. Se isso for importante, a solução é migrar para um framework com renderização no servidor (Next.js) ou pré-renderização — posso fazer isso depois, se quiser.

## Observações

- As áreas de atuação foram ajustadas com base no material enviado e em uma busca pública sobre o escritório (Direito de Família, Direito Médico, Direitos e Garantias Fundamentais, Direito Previdenciário, Direito do Consumidor, Direito Administrativo, Ação Rio Doce/Samarco e Direito Civil e Empresarial). Revise a lista em `content.js` e ajuste conforme a atuação real.
- Os posts do blog são textos originais, escritos com base nos temas que aparecem nas redes sociais do escritório (BPC/LOAS, plano de saúde, tempo sem registro, nome sujo, servidores públicos, transtorno bipolar, Ação Rio Doce). Revise antes de publicar — são pontos de partida, não pareceres jurídicos.
- O conteúdo sobre a Ação Rio Doce (caso Samarco/Mariana) reflete o andamento público do processo em maio de 2026 (esgotamento de recursos da BHP na Inglaterra, com fase de quantificação de danos prevista para abril de 2027). Atualize conforme o processo evoluir.
- O mapa na seção de contato usa o endereço cadastrado em `content.js` (campo `mapsQuery`) via Google Maps embed, sem necessidade de chave de API.
- O botão flutuante de WhatsApp e os links de contato usam os números informados: (33) 3271-9745 e (33) 9 9921-9808.
