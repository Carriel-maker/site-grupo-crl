GRUPO CRL — Seção "Quem Somos"
================================

ARQUIVOS
  index.html        Página de demonstração (a seção isolada, pronta para ver).
  quem-somos.css    Estilos da seção, todos sob o escopo .quem-somos
  quem-somos.js     Revelação por toque em telas sem hover (mobile).
  preview.html      Mesma seção com CSS/JS/imagens embutidos — abre com 2 cliques,
                    sem servidor. Use só para visualizar.
  assets/           Logos (PNG com fundo transparente).

COMO VER
  - preview.html: clique duas vezes.
  - index.html: precisa de um servidor local (os navegadores bloqueiam CSS/JS
    via file://). Ex.: rode um servidor estático na pasta /site e abra a raiz.

COMO EMBUTIR NO SITE
  1. Copie o bloco entre
       <!-- ===== INÍCIO — Seção "Quem Somos" ===== -->
       <!-- ===== FIM — Seção "Quem Somos" ===== -->
     de index.html para dentro da sua página.
  2. Inclua quem-somos.css no <head> e quem-somos.js antes de </body>.
  3. A fonte Jost vem do Google Fonts (só os rótulos em maiúsculas a usam);
     o corpo usa a pilha Helvetica/Arial do sistema.
  4. Ajuste os href="#" dos quatro logos para os endereços reais de cada marca.

ABERTURA
  - Ao carregar: tela branca com o logotipo GRUPO_CRL (cores originais,
    tamanho reduzido / minimalista) ao centro. Fica PARADA nesse estado.
  - A animação para a seção "Quem Somos" só acontece quando o mouse passa
    sobre o logo. Clique/toque e foco por teclado também disparam (para
    celular e acessibilidade).
  - A abertura sai para cima enquanto a seção surge por baixo (~0,8 s).
  - Sem JavaScript: a abertura é ignorada e a seção aparece direto (<noscript>).
  - Velocidade/curva: .qs-intro / .qs-intro--leaving / .qs-inner no quem-somos.css.
  - Para mostrar só uma vez por sessão, guarde um flag em sessionStorage no
    quem-somos.js e pule direto para section.classList.add('qs-entered').

COMPORTAMENTO DOS LOGOS
  - Cada logo são DUAS imagens sobrepostas: a colorida (assets/nome.png) e
    uma versão preta limpa (assets/nome-black.png). A preta fica por cima.
  - Hover / foco de teclado / toque: a versão preta some em 280 ms e revela
    as cores originais — só opacidade, sem mexer em tamanho/posição.
  - Sem filtro CSS de propósito: filter cria uma camada composta que borra
    o logo em telas HiDPI. Por isso a técnica de duas imagens.
  - Vale para os quatro logos E para o GRUPO_CRL do topo (o "_" azul só
    aparece no hover, junto com o brilho).
  - As versões -black.png são geradas a partir das coloridas (máscara limpa
    por luminância). Se trocar um logo, gere a -black.png correspondente.
  - Ajuste fino de escala por logo: .qs-brand[data-brand="..."] .qs-brand-img
    no quem-somos.css.

NOTA SOBRE OS ASSETS
  comc / crl-gestao / grupo-crl / rede-diz: PNGs originais do zip (resolução
  cheia, fundo transparente).
  mip.png: o original tinha fundo cinza opaco e muito espaço vazio — foi
  recortado no tamanho nativo e teve o fundo removido, para ficar consistente
  com os demais e não virar um retângulo preto no estado inicial.
