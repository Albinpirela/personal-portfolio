const faMenu = document.querySelector('.fa-sharp');
const aboutMeLink = document.querySelector('.about-me-link');
const skillsLink = document.querySelector('.skills-link');
const worksLink = document.querySelector('.works-link');
const contactLink = document.querySelector('.contact-link');
const menu = document.querySelector('.hamburger-menu');
const closeMenu = document.createElement('span');
const cards = [
  {
    title: 'News blog 1 ',
    techs: ['HTML', 'CSS', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: './image/my-work-img.png',
  },
  {
    title: 'News blog 2',
    techs: ['HTML', 'CSS', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: './image/my-work-img.png',
  },
  {
    title: 'News blog 3',
    techs: ['HTML', 'CSS', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: './image/my-work-img.png',
  },
  {
    title: 'News blog',
    techs: ['HTML', 'CSS', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: './image/my-work-img.png',
  },
];
const cardsContainer = document.getElementById('card-container').content;
const insertCards = document.querySelector('.my-works > ul');
const fragment = document.createDocumentFragment();

// Params (element, index);
cards.forEach((card, index) => {
  cardsContainer.querySelector('h2').textContent = card.title;
  cardsContainer.querySelector('h3').textContent = card.techs;
  cardsContainer.querySelector('p').textContent = card.description;
  cardsContainer.querySelector('img').setAttribute('src', card.img);
  // We assign the id of the card to the button see more (0)
  cardsContainer.querySelector('.seeMore').setAttribute('id', index);
  const clone = document.importNode(cardsContainer, true);
  fragment.appendChild(clone);
});
insertCards.appendChild(fragment);
document.addEventListener('click', (e) => {
  if (e.target.matches('.seeMore')) {
    e.preventDefault();

    // declare the modal and add the cards container
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';

    // we get the id of the button that was selected
    const idTarget = e.target.getAttribute('id');

    // Store the selected card according to the index and position of the array cards
    const cardSelected = cards[idTarget];

    const modalContent = document.querySelector('.modal-content');

    // Add selected card content to modal dynamically
    modalContent.querySelector('h2').textContent = cardSelected.title;
    modalContent.querySelector('h3').textContent = cardSelected.techs;
    modalContent.querySelector('p').textContent = cardSelected.description;
    modalContent.querySelector('img').setAttribute('src', cardSelected.img);
    document.querySelector('.modal span').addEventListener('click', () => {
      document.querySelector('.modal').style.display = 'none';
    });
  }
});

// Add styles to the clouse menu

closeMenu.innerHTML = 'X';
menu.appendChild(closeMenu);
closeMenu.classList.add('close-menu');
closeMenu.style.position = 'absolute';
closeMenu.style.top = '5px';
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

// validacion del formulario
document.addEventListener('DOMContentLoaded', () => {
  const name = {
    name: '',
    email: '',
    message: '',
  };

  function limpiarAlerta(referencia) {
    // comprueba si ya existe una alerta
    const alerta = referencia.querySelector('.alerta');
    if (alerta) {
      alerta.remove();
    }
  }

  function mostrarArlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    // genera el mensaje de error
    const error = document.createElement('p');
    error.classList.add('alerta');
    error.textContent = mensaje;
    error.style.fontSize = '0.9rem';
    error.style.textAlign = 'center';
    // inyectar el error al formulario
    referencia.appendChild(error);
  }

  function validarEmail(email) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function validarMessage(message) {
    const regex = /^.{1,300}$/; // Delimitar con / y ajustar el rango a 300
    const resultado = regex.test(message);
    return resultado;
  }

  function validar(e) {
    if (e.target.value.trim() === '') {
      mostrarArlerta(`EL campo ${e.target.id} es obligatorio`, e.target.parentElement);
      return;
    }
    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarArlerta(`el ${e.target.id} no es valido`, e.target.parentElement);
      return;
    }

    if (e.target.id === 'messager' && !validarMessage(e.target.value)) {
      mostrarArlerta(`el ${e.target.id}  solo puede tener un limite de 300 caracteres`, e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // asignar los valores al objeto
    name[e.target.name] = e.target.value.trim();
  }

  // seleciionamos el los elementos de la interfaz
  // asignar eventos
  const inputNombre = document.querySelector('#name');
  inputNombre.addEventListener('blur', validar);

  const inputEmail = document.querySelector('#email');
  inputEmail.addEventListener('blur', validar);

  const inputMessager = document.querySelector('#messager');
  inputMessager.addEventListener('blur', validar);
});
