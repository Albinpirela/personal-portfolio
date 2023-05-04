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

// form validation
document.addEventListener('DOMContentLoaded', () => {
  const name = {
    name: '',
    email: '',
    message: '',
  };

  function cleanAlert(referencia) {
    // Check if an alert already exists
    const alerta = referencia.querySelector('.alerta');
    if (alerta) {
      alerta.remove();
    }
  }

  function showAlert(mensaje, referencia) {
    cleanAlert(referencia);
    // generates the error message
    const error = document.createElement('p');
    error.classList.add('alerta');
    error.textContent = mensaje;
    error.style.margin = '0';
    error.style.padding = '0';
    error.style.fontSize = '1.1rem';
    error.style.textAlign = 'center';
    // inject the error to the form
    referencia.appendChild(error);
  }

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function validateMessage(message) {
    const regex = /^.{1,300}$/; // Delimit with / and set range to 300
    const resultado = regex.test(message);
    return resultado;
  }

  function validate(e) {
    if (e.target.value.trim() === '') {
      showAlert(`The field ${e.target.id} is required`, e.target.parentElement);
      return;
    }
    if (e.target.id === 'email' && !validateEmail(e.target.value)) {
      showAlert(`the ${e.target.id} It's not valid`, e.target.parentElement);
      return;
    }

    if (e.target.id === 'message' && !validateMessage(e.target.value)) {
      showAlert(`the ${e.target.id} limit is of 300 characters.`, e.target.parentElement);
      return;
    }

    cleanAlert(e.target.parentElement);

    // assign the values to the object
    name[e.target.name] = e.target.value.trim();
  }

  // select the interface elements
  // assign events
  const inputNombre = document.querySelector('#name');
  inputNombre.addEventListener('blur', validate);

  const inputEmail = document.querySelector('#email');
  inputEmail.addEventListener('blur', validate);

  const inputMessage = document.querySelector('#message');
  inputMessage.addEventListener('blur', validate);
});
