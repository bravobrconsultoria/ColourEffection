# Fotografias futuras

Nenhuma imagem foi pesquisada, descarregada ou gerada. Todos os valores de imagem começam em `null`. Os espaços são divs vazias com fundo #FFFFFF e aria-hidden, sem elementos img ou textos alternativos artificiais.

| Seção | Componente | Proporção | Dimensão recomendada | Formato | Arquivo sugerido / configuração |
|---|---|---|---|---|---|
| Home hero | HeroImage | 4:5 desktop; 4:3 mobile, com recorte | 1600 × 2000 | AVIF/WebP | public/images/hero/queenstown-painting.webp → images.hero |
| Home apresentação | AboutImage | 4:5 desktop; 4:3 mobile | 1200 × 1500 | AVIF/WebP | public/images/about/company.webp → images.about |
| About equipe | AboutImage | 4:5 desktop; 4:3 mobile | 1200 × 1500 | AVIF/WebP | public/images/about/team.webp → images.team |
| Interior Painting | ServiceImage | 4:3 | 1200 × 900 | AVIF/WebP | public/images/services/interior-painting.webp → images.services['interior-painting'] |
| Exterior Painting | ServiceImage | 4:3 | 1200 × 900 | AVIF/WebP | public/images/services/exterior-painting.webp → images.services['exterior-painting'] |
| Residential Painting | ServiceImage | 4:3 | 1200 × 900 | AVIF/WebP | public/images/services/residential-painting.webp → images.services['residential-painting'] |
| Commercial Painting | ServiceImage | 4:3 | 1200 × 900 | AVIF/WebP | public/images/services/commercial-painting.webp → images.services['commercial-painting'] |
| New Builds & Renovations | ServiceImage | 4:3 | 1200 × 900 | AVIF/WebP | public/images/services/new-builds-renovations.webp → images.services['new-builds-renovations'] |
| Decorating & Specialist Finishes | ServiceImage | 4:3 | 1200 × 900 | AVIF/WebP | public/images/services/decorating-finishes.webp → images.services['decorating-finishes'] |
| Home projetos, 4 espaços | GalleryImage vazio / ProjectImage cadastrado | 4:3 | 1600 × 1200 | AVIF/WebP | public/images/projects/ + projects[] |
| Our Work galeria, 4 espaços iniciais | GalleryImage vazio / ProjectImage cadastrado | 4:3 | 1600 × 1200 | AVIF/WebP | public/images/projects/ + projects[] |

As fotos dos serviços são reutilizadas nas páginas individuais. Os primeiros quatro projetos reais são mostrados na Home; a galeria completa aparece em Our Work. Os espaços iniciais por categoria não representam projetos concluídos.

## Adicionar

1. Obter autorização para uso das fotos, confirmar que pertencem ao cliente e remover metadados privados como GPS.
2. Exportar fotos optimizadas para WebP/AVIF (objetivo aproximado: hero até 300 KB; cards até 150 KB, conforme qualidade).
3. Salvar na pasta indicada. Nunca usar URL externa ou cadastrar caminho sem arquivo.
4. Em `src/content.mjs`, substituir o `null` relevante por:

```js
{ src: '/images/about/team.webp', alt: 'Descrição factual em inglês da fotografia real', width: 1200, height: 1500 }
```

5. Para projetos, cadastrar em `projects`: id único, title real, category exata dentre `categories`, location opcional real e image com os campos acima. Exigir uma imagem real para cada projeto publicado.
6. Executar build. O build verifica a existência dos arquivos e os componentes exigem alt e dimensões.
7. Rever recorte desktop/mobile. Fotografias usam object-fit: cover; escolher enquadramentos que tolerem recorte.

Não inventar alt, nome de obra, localização ou cliente a partir de suposições. Não colocar texto essencial sobre as áreas de imagem. Não existe foto de fundo atualmente; caso seja criada, preservar o comportamento branco enquanto ausente. Open Graph não inclui imagem até existir uma imagem real aprovada, idealmente 1200 × 630.

Os testes que exigem ausência total de imagens descrevem esta entrega inicial. Ao cadastrar fotografias, atualizar esses testes para validar apenas ausência de arquivos quebrados, URLs externas e espaços ainda vazios.
