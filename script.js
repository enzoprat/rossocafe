// ROSSO CAFE — interactions

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Menu tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach(t => t.classList.toggle('active', t === tab));
    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
    // smooth scroll into view if needed
    const menuSection = document.getElementById('menu');
    const rect = menuSection.getBoundingClientRect();
    if (rect.top < -100) menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Mobile nav: simple toggle showing nav links inline
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    if (navCta) navCta.classList.toggle('open', isOpen);
    burger.classList.toggle('open', isOpen);
  });
}

// Close mobile menu after click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    if (navCta) navCta.classList.remove('open');
    if (burger) burger.classList.remove('open');
  });
});

// Reveal on scroll (fade in)
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.sig-card, .vibe, .about-card, .menu-block').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// Hero parallax (subtle)
const heroPhoto = document.querySelector('.hero-photo img');
const hero = document.querySelector('.hero');
if (heroPhoto && hero) {
  window.addEventListener('scroll', () => {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const offset = window.scrollY * 0.25;
    heroPhoto.style.transform = `translateY(${offset}px) scale(1.05)`;
  }, { passive: true });
}

// Nav scrolled state
const navEl = document.querySelector('.nav');
const setNavState = () => {
  if (window.scrollY > 50) navEl.classList.add('scrolled');
  else navEl.classList.remove('scrolled');
};
window.addEventListener('scroll', setNavState, { passive: true });
setNavState();
