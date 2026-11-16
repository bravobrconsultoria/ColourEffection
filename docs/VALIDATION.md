# Validação — 10/11/2026

## Checks concluídos

- Build gerou 12 páginas estáticas + 404, sitemap e robots.
- Verificação de sintaxe dos cinco módulos/scripts passou (lint nativo Node).
- Seis testes automatizados passaram: SEO/schema; links e âncoras; áreas de fotos vazias e ausência de assets externos; contrato de imagens futuras; sitemap/robots; validação e preparação mailto/honeypot.
- Browser QA em servidor local: Home, Services, Our Work, About, Contact e página Decorating & Specialist Finishes nas larguras 375, 768 e 1440 px. Nenhuma rolagem horizontal detectada nas 18 combinações.
- Inspeção visual do hero desktop/mobile, serviços em tablet, About desktop e formulário mobile.
- Menu mobile abre corretamente. Erros dos seis campos obrigatórios aparecem e foco vai para o primeiro campo inválido.
- Filtro Exterior Painting mostra somente o espaço da categoria selecionada e atualiza status acessível.
- Todas as regiões .photo das páginas verificadas retornaram background rgb(255, 255, 255) e texto vazio. A inspeção do HTML confirmou ausência de img e conteúdo dentro dessas regiões.
- Nenhum erro ou aviso de console capturado nas páginas verificadas.
- Nenhuma imagem externa, analytics ou fonte remota incorporada.

## Ambiente e limites

- npm não estava no PATH; comandos equivalentes executados diretamente com Node v24.22.1, sem instalação.
- Servidor inicial isolado não era acessível no navegador; uma execução local autorizada fora do isolamento permitiu concluir QA na porta 4287.
- Nenhum e-mail foi enviado. O fluxo mailto foi testado em harness automatizado; a entrega depende do aplicativo de e-mail do visitante e de ele efetivamente enviar a mensagem.
- Não foi feita auditoria Lighthouse/Core Web Vitals em produção nem certificação completa de WCAG. Layout não usa fontes remotas, imagens ou bibliotecas externas nesta etapa. Repetir performance e QA após adicionar fotos reais.
- Captura do site oficial falhou; detalhes no documento de pesquisa.
- Servidores de verificação encerrados após QA. Use os comandos do README para abrir a prévia novamente.
