// Highlight the contents entry for the section on screen.
(function () {
  const links = [...document.querySelectorAll('.toc a[href^="#"]')];
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const seen = new Map();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) seen.set(e.target.id, e.isIntersecting);
    const first = [...byId.keys()].find((id) => seen.get(id));
    if (!first) return;
    links.forEach((a) => a.classList.toggle('active', a === byId.get(first)));
  }, { rootMargin: '-80px 0px -55% 0px' });
  byId.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
})();
