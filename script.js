document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const topBtn = document.getElementById('topBtn');
if (topBtn) {
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent('Request for Quote - EJay Projects Website');
    const body = encodeURIComponent(`Good day EJay Projects Team,

Please assist with the following request:

Name: ${data.get('name')}
Company: ${data.get('company')}
Email: ${data.get('email')}
Phone / WhatsApp: ${data.get('phone')}
Service Required: ${data.get('service')}
Project Location: ${data.get('location') || 'Not specified'}

Brief Scope / Enquiry:
${data.get('message')}

Kind regards,
${data.get('name')}`);
    window.location.href = `mailto:admin@ejayprojects.com?subject=${subject}&body=${body}`;
  });
}

const sections = document.querySelectorAll('main section[id], main[id]');
const navLinks = document.querySelectorAll('.main-nav a');
window.addEventListener('scroll', () => {
  let current = 'top';
  document.querySelectorAll('section[id]').forEach(section => {
    if (scrollY >= section.offsetTop - 130) current = section.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}` || (current === 'top' && a.getAttribute('href') === '#top'));
  });
});
