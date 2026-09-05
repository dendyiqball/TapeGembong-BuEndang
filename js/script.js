document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');
  const year = document.getElementById('year');

  year.textContent = new Date().getFullYear();

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    backTop.classList.toggle('show', window.scrollY > 500);
  });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Tutup navbar mobile setelah memilih menu.
  document.querySelectorAll('#navbarMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navbarMenu');
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Tombol pesan tiap produk otomatis membuka WhatsApp dengan nama produk.
  document.querySelectorAll('.order-product').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.dataset.product;
      const message = `Halo Bu Endang, saya ingin pesan ${product}. Mohon info harga dan ketersediaannya ya.`;
      window.open(`https://wa.me/62895385157030?text=${encodeURIComponent(message)}`, '_blank');
    });
  });

  // Highlight menu navigasi berdasarkan section yang sedang terlihat.
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
});


  // Scroll reveal animation
  const revealItems = document.querySelectorAll(
    '.product-card, .info-item, .gallery-item, .about-photo, .cta-box'
  );

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealItems.forEach(item => revealObserver.observe(item));
