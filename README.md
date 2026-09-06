# site-grupo-crl

Seção **"Quem Somos"** do site do Grupo CRL.

## Estrutura

```
docs/                  → o que vai pro ar (GitHub Pages serve esta pasta)
  index.html           página da seção (com marcadores p/ copiar o <section>)
  quem-somos.css       estilos, escopados em .quem-somos
  quem-somos.js        abertura + revelação de cor por toque no mobile
  preview.html         versão autocontida (abre com 2 cliques, sem servidor)
  assets/              logos: <marca>.png (cor) + <marca>-black.png (preto)
  README.txt           notas de implementação da seção
```

## Como funciona

- **Abertura:** tela branca com o GRUPO_CRL (colorido, discreto) ao centro.
  Fica parada até o mouse passar sobre o logo (clique/toque/teclado também) —
  aí a seção "Quem Somos" surge com uma transição curta.
- **Logos das 4 marcas:** duas imagens sobrepostas (cor + preto). Em repouso
  aparece a preta; no hover/foco ela some e revela as cores. Sem `filter` CSS
  (evita desfoque em telas HiDPI).
- Responsivo; respeita `prefers-reduced-motion`; funciona sem JavaScript.

## Publicar (GitHub Pages)

Settings → Pages → Build and deployment → Source: **Deploy from a branch** →
Branch: `main` / `/docs` → Save. O link sai em ~1 min.

## Editar depois

Ajuste os `href="#"` dos quatro logos para os endereços reais de cada marca.
Se trocar um logo, gere a versão `-black.png` correspondente (máscara preta
limpa a partir da colorida).
