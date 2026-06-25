document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.querySelector('#quoteForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const body = [
        `Full name: ${data.get('name') || ''}`,
        `Company: ${data.get('company') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Phone / WhatsApp: ${data.get('phone') || ''}`,
        `Service required: ${data.get('service') || ''}`,
        `Project location: ${data.get('location') || ''}`,
        '',
        'Brief scope / enquiry:',
        `${data.get('message') || ''}`,
        '',
        'Note: Please attach any RFQ documents, drawings or tender documents to this email.'
      ].join('\n');
      window.location.href = `mailto:admin@ejayprojects.com?subject=${encodeURIComponent('Website Request for Quote')}&body=${encodeURIComponent(body)}`;
    });
  }
});
