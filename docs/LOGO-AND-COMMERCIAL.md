# Logo e destaque comercial — 11/11/2026

## Logo

- Original fornecido: public/images/brand/logo-original.png (150 × 150).
- Versão transparente: public/images/brand/logo-transparent.png (1536 × 1024, PNG com alpha real).
- A cópia de build está em dist/images/brand/logo-transparent.png.
- Método: ferramenta integrada image_gen, edição background-extraction. Original preservado. A versão editada não é uma matriz vetorial; por partir de referência muito pequena, obter futuramente arquivo oficial de alta resolução para fidelidade exata de tipografia e contornos.
- Validado alpha: canto totalmente transparente e amostras de pixels com transparência total/parcial.

Prompt utilizado:

> Edit target: supplied official Colour Effection Painting logo. Background extraction ONLY. Remove white outer background to genuine transparent alpha. Preserve the exact existing roof/house/paintbrush emblem, white interior parts of houses, black details, composition and original small script lettering unchanged. Do not redesign, retype, add, reinterpret or invent any element. Deliver PNG transparent cutout of this same logo.

## Antes e depois

Fotos anexadas pelo cliente, classificadas por ele como trabalho comercial:

- Antes: public/images/projects/commercial-before.png.
- Depois: public/images/projects/commercial-after.png.
- Componente commercialShowcase em src/site.mjs; dados commercialFeature em src/content.mjs.
- Comparação lado a lado, preservando proporção 3:4 das fotografias. Não foi usado slider sobreposto porque os pontos de vista são diferentes.
- Destaque na Home, Our Work e Commercial Painting. Galeria classifica a obra como Commercial Projects. Não foram inventados cliente, endereço, data, técnica ou especificação de revestimento.

## Espaços de imagem

Todos os slots exibidos nas páginas estão preenchidos com mídia fornecida. Exterior Painting usa uma foto geral da equipe trabalhando, identificada como tal nos cards; não foi inventada uma obra externa. Substituir por fotografia exterior real quando disponível.

A logo foi incorporada à navegação e ao rodapé. Na abertura sobre vídeo há uma pequena base clara de contraste; ela pertence ao CSS, não ao PNG transparente.

## Validação

Build, lint de sintaxe e testes automatizados aprovados. Navegador: sem overflow horizontal em mobile/desktop verificados; nenhum slot vazio na Home e galeria; filtro Commercial Projects mantém o antes/depois visível; nenhum erro de console observado. Nenhum deploy realizado.
