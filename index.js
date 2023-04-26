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
closeMenu.classList.add('close-menu');
closeMenu.style.position = 'absolute';
closeMenu.style.top = '10px';
closeMenu.style.right = '40px';
closeMenu.style.fontSize = '2rem';
closeMenu.style.fontWeight = 'bold';
closeMenu.style.cursor = 'pointer';

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
