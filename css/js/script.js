// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.style.color = '#B08A4B';
  }
});

// Fade in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => observer.observe(el));
}

// Booking form -> WhatsApp
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('b-name').value;
    const phone = document.getElementById('b-phone').value;
    const date = document.getElementById('b-date').value;
    const time = document.getElementById('b-time').value;
    const property = document.getElementById('b-property') ? document.getElementById('b-property').value : '';
    const notes = document.getElementById('b-notes') ? document.getElementById('b-notes').value : '';

    let message = `طلب حجز معاينة عقار%0A`;
    message += `الاسم: ${name}%0A`;
    message += `الهاتف: ${phone}%0A`;
    message += `التاريخ: ${date}%0A`;
    message += `الوقت: ${time}%0A`;
    if (property) message += `العقار: ${property}%0A`;
    if (notes) message += `ملاحظات: ${notes}%0A`;

    const whatsappURL = `https://wa.me/963995221371?text=${message}`;
    window.open(whatsappURL, '_blank');
  });
}

// Property filter
const filterBtns = document.querySelectorAll('.filter-btn');
const propertyCards = document.querySelectorAll('.property-card');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      propertyCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-status') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
