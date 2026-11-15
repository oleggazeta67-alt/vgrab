const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        const siblings = Array.from(el.parentElement.children).filter((c) =>
          c.classList.contains('reveal')
        );
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(idx, 5) * 70 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}