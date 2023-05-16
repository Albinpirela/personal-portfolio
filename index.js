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
    modalContent.querySelector('img').setAttribute('alt', cardSelected.img);
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
  function cleanAlert(referencia) {
    // Check if an alert already exists
    const alerta = referencia.querySelector('.alerta');
    if (alerta) {
      alerta.remove();
    }
  }

  function showAlert(message, reference) {
    cleanAlert(reference);
    // generates the error message
    const error = document.createElement('p');
    error.classList.add('alerta');
    error.textContent = message;
    error.style.margin = '0';
    error.style.padding = '0';
    error.style.fontSize = '1.1rem';
    error.style.textAlign = 'center';
    // inject the error to the form
    reference.appendChild(error);
  }

  function validateName(name) {
    const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Delimit with / and set range to 40
    const resultado = regex.test(name);
    return resultado;
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

  function updateSubmitButtonState() {
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMessage = document.querySelector('#message');
    const btnSubmit = document.querySelector('.form-button');
    if (inputName.value === '' || inputEmail.value === '' || inputMessage.value === '') {
      btnSubmit.disabled = true;
      btnSubmit.style.opacity = '0.2';
    } else {
      const isNameValid = validateName(inputName.value);
      const isEmailValid = validateEmail(inputEmail.value);
      const isMessageValid = validateMessage(inputMessage.value);
      if (isNameValid && isEmailValid && isMessageValid) {
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = '1';
      } else {
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.2';
      }
    }
  }

  function validate(e) {
    const storedData = JSON.parse(localStorage.getItem('data')) || {};
    if (e.target.value.trim() === '') {
      showAlert(`The field ${e.target.id} is required`, e.target.parentElement);
      return;
    }

    if (e.target.id === 'name' && !validateName(e.target.value)) {
      showAlert(`the ${e.target.id} can only contain letters`, e.target.parentElement);
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

    if (e.target.name === 'name') {
      storedData.name = e.target.value.trim();
    } else if (e.target.name === 'email') {
      storedData.email = e.target.value.trim();
    } else if (e.target.name === 'message') {
      storedData.message = e.target.value.trim();
    }
    localStorage.setItem('data', JSON.stringify(storedData));

    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMessage = document.querySelector('#message');

    // Load the data stored in the LocalStorage when loading or refreshing the page
    inputName.value = storedData.name || '';
    inputEmail.value = storedData.email || '';
    inputMessage.value = storedData.message || '';

    cleanAlert(e.target.parentElement);
    updateSubmitButtonState();
  }

  // select the interface elements
  // assign events
  const inputName = document.querySelector('#name');
  inputName.addEventListener('blur', validate);

  const inputEmail = document.querySelector('#email');
  inputEmail.addEventListener('blur', validate);

  const inputMessage = document.querySelector('#message');
  inputMessage.addEventListener('blur', validate);

  // Load the data stored in the LocalStorage when loading or refreshing the page

  window.addEventListener('load', () => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      inputName.value = storedData.name;
      inputEmail.value = storedData.email;
      inputMessage.value = storedData.message;
    }
  });

  function resetFormAndLocalStorage() {
    // Limpiar el formulario
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMessage = document.querySelector('#message');
    inputName.value = '';
    inputEmail.value = '';
    inputMessage.value = '';
    // Limpiar el almacenamiento local
    localStorage.removeItem('data');
  }

  function sendingForm() {
    const form = document.querySelector('.contact-form');
    const btnSubmit = form.querySelector('.form-button');
    const messageSusses = document.createElement('p');
    messageSusses.textContent = 'Sent successfully';
    messageSusses.style.color = 'green';

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        btnSubmit.parentNode.insertBefore(messageSusses, btnSubmit);
        btnSubmit.disabled = true;
      } else {
        messageSusses.textContent = 'An error has occurred.';
        messageSusses.style.color = 'red';
      }
    };
    xhr.send(new FormData(form));
  }

  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendingForm();
    resetFormAndLocalStorage();
  });
});
