# Deploy, SEO e formulário

## Estado atual

Somente local. Nenhum Site registrado ou publicado; nenhuma alteração no domínio ou website existente. Projeto estático sem backend, dependências, banco ou segredos.

## Formulário

Valida campos, e-mail via validação nativa, telefone, limites de comprimento e honeypot. Prepara `mailto:` para o contato centralizado; o usuário precisa enviar pelo próprio aplicativo. Exibe explicitamente que nada foi enviado. Inclui opção para copiar o texto caso não haja cliente de e-mail, com fallback de seleção manual se clipboard falhar. Enquiries muito longas seguem o fluxo de copiar. Não armazena dados em localStorage/cookies e não transmite automaticamente. Honeypot não equivale a proteção de servidor, pois não existe endpoint nesta versão.

## Integração posterior segura

Quando houver provedor/backend, implementar POST /api/quote no servidor, usando os nomes atuais dos campos. Não configurar URL fictícia nem chave no frontend. Validar tamanho e tipos no servidor, limitar tentativas, verificar origem e honeypot, fixar destinatário em leonardo@cepdecoration.com e usar remetente de domínio verificado, com reply-to validado. Manter credenciais no ambiente secreto da hospedagem. Implementar mensagens de falha/retry e só confirmar recebimento após aceitação real pelo serviço. Atualizar o aviso mailto e a política de privacidade. Testar entrega e autenticação SPF/DKIM/DMARC com o provedor escolhido. Não enviar e-mails de teste sem autorização.

## Publicação futura (somente após autorização)

1. Confirmar pendências e repetir QA visual e funcional após inserir o conteúdo final.
2. Executar build, lint e testes.
3. Hospedar conteúdo de dist/ em hospedagem estática com HTTPS, URLs de diretórios e 404.html.
4. Configurar cabeçalhos equivalentes ao servidor local: nosniff, referrer-policy, CSP com recursos locais, object-src none, frame-ancestors none. Configurar HSTS após validar HTTPS. Ajustar CSP apenas se uma integração real exigir.
5. Em prévias públicas usar controle de acesso ou X-Robots-Tag: noindex. O robots.txt atual é para a futura produção.
6. Preservar URLs antigas com redirects 301 após levantar o sitemap do site existente. Esse levantamento está pendente porque o site não abriu.
7. Confirmar domínio www; mudar business.url caso o domínio canônico definitivo seja outro.
8. Verificar propriedade no Search Console via DNS ou arquivo autorizado, enviar /sitemap.xml e testar dados estruturados. A presença de schema não garante rich results.
9. Atualizar link do website no Google Business Profile somente com autorização. Não foram configuradas APIs de avaliações.

Cada página tem title e descrição próprios, canonical, OG, Twitter, en-NZ e um H1. Schema HousePainter usa somente dados fornecidos, sem ratings. Não existe og:image enquanto não houver asset real. A homepage usa localização em eyebrow e texto introdutório. Sitemap contém 12 páginas.

