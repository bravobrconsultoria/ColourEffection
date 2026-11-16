# Atualização de mídia — 11/11/2026

A solicitação de manter tudo branco foi substituída pela autorização de usar os arquivos fornecidos em dist/images. Os originais foram copiados para public/images para preservação. Não houve pesquisa ou geração de mídia.

## Abertura

- Vídeo selecionado: WhatsApp Video 2026-11-10 at 17.17.45.mp4.
- Arquivo usado pelo site: public/videos/spray-painting.mp4 (480 × 854, aproximadamente 18,4 s, 2,8 MB).
- Hero em largura total com recorte cover, reprodução sem som, loop e botão de pausa.
- Todos os seis vídeos fornecidos são verticais. O desktop recorta a parte superior/inferior; uma filmagem horizontal original de maior resolução poderá melhorar a nitidez futuramente.
- Preferência de movimento reduzido e economia de dados impedem carregamento automático. Nesses casos a foto aparece e o visitante pode iniciar manualmente.
- Ao ocultar a aba, o vídeo pausa. A escolha manual de pausa é preservada enquanto a página estiver aberta.
- Servidor local atualizado com MIME video/mp4 e HTTP Range para streaming e seek.

## Fotografias

Arquivos com nomes legíveis em public/images/projects. Configuração central em src/content.mjs (photos, images, projects, heroVideo). Os originais permanecem disponíveis. O arquivo docs/media-manifest.json registra dimensões e nomes fornecidos. A folha docs/media-contact-sheet.jpg é apenas um índice local de inspeção, não um asset usado no website.

Fotos configuradas: pintura com pistola, ambientes internos, quarto, corredor, preparação e interior comercial. As legendas descrevem apenas o conteúdo visível, sem cliente, localização ou data inventados. As fotos em andamento não são apresentadas como obras finalizadas.

Não há fotografia exterior nos arquivos recebidos; essa área continua branca. O filtro de exterior informa que não há fotografias na categoria e oferece contato. Não há avaliações fictícias.

## Layout e validação

Numerações removidas dos cards de serviços, diferenciais e etapas. Hero em vídeo com menu sobreposto, título branco e CTAs. Cards simplificados, sem caixas numeradas.

Build e sete testes passaram. Sintaxe verificada. Navegador: vídeo reproduziu sem som, controle de pausa funcionou e preferência reduced-motion manteve o poster sem carregar vídeo. Inspeção mobile (375 px), tablet (768 px) e desktop; sem imagens quebradas ou erros de console observados. Galeria de exterior vazia apresenta mensagem apropriada. Nenhum envio de e-mail ou deploy realizado.

A documentação IMAGES.md anterior descreve a fase inicial. Para futuras trocas, prevalece a configuração atual em src/content.mjs; componentes e proporções continuam reutilizáveis.

## Troca do vídeo — 12/11/2026
Hero alterado para public/videos/interior-finish.mp4, proveniente de WhatsApp Video 2026-11-10 at 17.17.48 (1).mp4: 480 × 854, aproximadamente 11,4 segundos. Escolhido plano de paredes e teto com menor carga visual. Mantidos mute, loop, pausa e reduced-motion. Todos os arquivos recebidos continuam limitados pela resolução vertical e compressão; esta troca não produz qualidade HD. Reprodução verificada no navegador.
