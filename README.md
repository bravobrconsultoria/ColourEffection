# Colour Effection — website

Implementação local independente em inglês en-NZ. Nenhuma publicação foi feita.

## Executar

Requer Node.js 22 ou superior. Sem dependências e sem instalação de pacotes.

```powershell
node scripts/build.mjs
node scripts/serve.mjs
```

Abrir a URL indicada no terminal (porta padrão 4173). Para outra porta:

```powershell
$env:PORT='4286'
node scripts/serve.mjs
```

O servidor deve permanecer ativo. Pare com Ctrl+C. Após alterações, execute o build e recarregue a página. Se npm estiver disponível, também existem `npm run build`, `npm run dev`, `npm run lint` e `npm test`.

## Arquitetura

- `src/content.mjs`: dados comerciais, serviços, imagens, projetos e avaliações.
- `src/site.mjs`: componentes e páginas renderizados no build.
- `public/styles.css`: tokens, layout, estados, breakpoints e reduced-motion.
- `public/app.js`: menu, filtros e formulário mailto.
- `scripts/build.mjs`: 12 páginas HTML estáticas, sitemap, robots e 404.
- `scripts/serve.mjs`: servidor local com cabeçalhos de segurança.
- `dist/`: entrega estática gerada, pronta para futura hospedagem autorizada.
- `docs/IMAGES.md`: inventário de fotos e instruções de inclusão.
- `docs/RESEARCH-AND-PENDING.md`: pesquisa, fontes e confirmações do cliente.
- `docs/DEPLOY-AND-FORM.md`: hospedagem, SEO e futura integração de envio.
- `docs/VALIDATION.md`: checks realizados e limites de validação.

A implementação usa fontes do sistema, com Inter/Manrope quando instaladas. Não faz requisições a fontes externas. Se necessário, adicionar fonte licenciada em WOFF2 local antes da publicação.

## Direção visual

Editorial, branco e off-white, grafite e verde profundo. Wordmark tipográfico provisório, sem inventar uma logomarca oficial. Fotos são blocos vazios #FFFFFF com proporção estável; sem texto, símbolos, gradientes ou requisições inexistentes. As bordas pertencem ao layout de cards, não ao conteúdo das fotos.

## Verificações

```powershell
node --check src/site.mjs
node --check src/content.mjs
node --check public/app.js
node --check scripts/build.mjs
node --check scripts/serve.mjs
node --test tests/*.test.mjs
```

Lint neste projeto consiste na verificação de sintaxe nativa do Node, sem ESLint ou dependências adicionais. Não editar `dist/` diretamente.

## Atualização com mídia do cliente

Fotos reais e hero com vídeo implementados em 11/11/2026. Ver `docs/MEDIA-UPDATE.md` para seleção de arquivos, comportamento de reprodução e validação. A regra de fotos totalmente brancas agora se aplica somente aos espaços sem mídia correspondente. Numerações de cards/seções removidas.

## Logo e projeto comercial em destaque

Atualização com logo transparente, comparação comercial e todos os slots preenchidos: `docs/LOGO-AND-COMMERCIAL.md`.
