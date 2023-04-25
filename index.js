const faMenu = document.querySelector('.fa-sharp');
const aboutMeLink = document.querySelector('.about-me-link');
const skillsLink = document.querySelector('.skills-link');
const worksLink = document.querySelector('.works-link');
const contactLink = document.querySelector('.contact-link');
const menu = document.querySelector('.hamburger-menu');

function hiddenMenu() {
  menu.classList.add('active');
  document.body.classList.remove('opacity');
}

function toggleMenu(e) {
// Cambia los estilos para el menú y el body
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  // Cambia el atributo "src" del icono del menú
  const currentIcon = e.target.querySelector('svg');
  if (currentIcon.classList.contains('fa-solid')) {
    currentIcon.setAttribute('class', 'fa-sharp');
  } else {
    currentIcon.setAttribute('class', 'fa-solid fa-bars');
  }
}

// Event listeners
aboutMeLink.addEventListener('click', hiddenMenu);
skillsLink.addEventListener('click', hiddenMenu);
worksLink.addEventListener('click', hiddenMenu);
contactLink.addEventListener('click', hiddenMenu);
faMenu.addEventListener('click', toggleMenu);
