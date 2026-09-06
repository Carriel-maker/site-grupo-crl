/* GRUPO CRL — "Quem Somos"
   Em telas sem hover (toque), o primeiro toque revela as cores da logo;
   tocar fora volta todas ao preto. Não interfere na navegação real dos links. */
(function () {
  var section = document.querySelector('.quem-somos');
  if (!section) return;

  /* --- Abertura: fica parada até o mouse passar sobre o logo (ou clique/toque) --- */
  var intro = document.getElementById('qs-intro');
  if (intro) {
    var trigger = intro.querySelector('.qs-intro-trigger') || intro;
    var entered = false;

    var enter = function () {
      if (entered) return;
      entered = true;
      section.classList.add('qs-entered');   // seção sobe e aparece
      intro.classList.add('qs-intro--leaving'); // abertura sai de cena

      var remove = function () { intro.hidden = true; };
      intro.addEventListener('transitionend', remove, { once: true });
      setTimeout(remove, 1200); // trava de segurança
    };

    trigger.addEventListener('mouseenter', enter);
    trigger.addEventListener('focus', enter);
    trigger.addEventListener('click', enter);
  }

  var brands = section.querySelectorAll('.qs-brand');
  var noHover = window.matchMedia('(hover: none)').matches;

  brands.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var href = el.getAttribute('href');
      if (!href || href === '#') e.preventDefault();

      if (noHover) {
        var wasActive = el.classList.contains('is-active');
        brands.forEach(function (b) { b.classList.remove('is-active'); });
        if (!wasActive) el.classList.add('is-active');
      }
    });
  });

  if (noHover) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.qs-brand')) {
        brands.forEach(function (b) { b.classList.remove('is-active'); });
      }
    });
  }
})();
