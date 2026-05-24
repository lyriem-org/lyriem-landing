/* ==========================================================
   lyriem-shared.js
   Shared JS — nav hamburger + FAQ accordion.
   ========================================================== */
(function() {
  'use strict';

  // ── MOBILE NAV ──────────────────────────────────────────
  var burger = document.getElementById('navBurger');
  var drawer = document.getElementById('navDrawer');
  if (burger && drawer) {
    burger.addEventListener('click', function() {
      var open = burger.classList.toggle('open');
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
    });
    window.addEventListener('scroll', function() {
      burger.classList.remove('open');
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }, { passive: true });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        burger.classList.remove('open');
        drawer.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── FAQ ACCORDION ────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item   = btn.parentElement;
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── SCROLL REVEAL ────────────────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
          var idx = siblings.indexOf(entry.target);
          setTimeout(function() { entry.target.classList.add('visible'); }, idx * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function(el) { observer.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }

  // ── COPY EMAIL (footer contact) ──────────────────────────
  document.querySelectorAll('.js-copy-email').forEach(function(link) {
    link.addEventListener('click', function() {
      var email = (link.getAttribute('href') || '').replace(/^mailto:/, '');
      if (navigator.clipboard && email) {
        navigator.clipboard.writeText(email).then(function() {
          var original = link.textContent;
          link.textContent = 'Copied!';
          setTimeout(function() { link.textContent = original; }, 2000);
        }).catch(function() {});
      }
      // No preventDefault: mailto still opens a mail client if one exists.
    });
  });

})();
