const faMenu = document.querySelector('.fa-sharp');
const aboutMeLink = document.querySelector('.about-me-link');
const skillsLink = document.querySelector('.skills-link');
const worksLink = document.querySelector('.works-link');
const contactLink = document.querySelector('.contact-link');
const menu = document.querySelector('.hamburger-menu');
const closeMenu = document.createElement('span');

// Add styles to the clouse menu

closeMenu.innerHTML = 'X';
menu.appendChild(closeMenu);
closeMenu.classList.add('clouse-menu');
closeMenu.style.position = 'absolute';
closeMenu.style.top = '10px';
closeMenu.style.right = '40px';
closeMenu.style.fontSize = '1.5rem';
closeMenu.style.cursor = 'pointer';
closeMenu.style.padding = '5px';
closeMenu.style.border = '1px solid #ff8303';
closeMenu.style.borderRadius = '50%';

function hiddenMenu() {
  menu.classList.add('active');
  document.body.classList.remove('opacity');
}

function toggleMenu() {
// Change the styles for the menu and the body
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');
}

// Event listeners
aboutMeLink.addEventListener('click', hiddenMenu);
skillsLink.addEventListener('click', hiddenMenu);
worksLink.addEventListener('click', hiddenMenu);
contactLink.addEventListener('click', hiddenMenu);
faMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', hiddenMenu);
