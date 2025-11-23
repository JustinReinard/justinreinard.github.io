// script.js - simple interactions (no frameworks)

// Contact dropdown toggle
const contactToggle = document.getElementById('contactToggle');
const contactDropdown = document.getElementById('contactDropdown');
const copiedBadge = document.getElementById('copiedBadge');

contactToggle.addEventListener('click', () => {
  const isOpen = contactDropdown.style.display === 'block';
  contactDropdown.style.display = isOpen ? 'none' : 'block';
  contactDropdown.setAttribute('aria-hidden', String(isOpen));
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!contactToggle.contains(e.target) && !contactDropdown.contains(e.target)) {
    contactDropdown.style.display = 'none';
    contactDropdown.setAttribute('aria-hidden', 'true');
  }
});

// WhatsApp open
const whatsappRow = document.getElementById('whatsapp');
whatsappRow.addEventListener('click', () => {
  // use international number without + for wa.me
  const number = '+6285688165888'.replace(/\+/g,'');
  window.open(`https://wa.me/${number}`, '_blank', 'noopener,noreferrer');
});

// GitHub open
const githubRow = document.getElementById('github');
githubRow.addEventListener('click', () => {
  window.open('https://github.com/JustinReinard', '_blank', 'noopener,noreferrer');
});

// small utility to copy text (if you want to add copy buttons later)
function copyToClipboard(text, label){
  navigator.clipboard.writeText(text).then(() => {
    copiedBadge.textContent = label ? `${label} copied` : 'Copied';
    copiedBadge.style.display = 'block';
    setTimeout(() => { copiedBadge.style.display = 'none'; copiedBadge.textContent = ''; }, 2000);
  }, () => {
    copiedBadge.textContent = 'Copy failed';
    copiedBadge.style.display = 'block';
    setTimeout(() => { copiedBadge.style.display = 'none'; copiedBadge.textContent=''; }, 2000);
  });
}
