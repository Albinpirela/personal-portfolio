const faMenu = document.querySelector(".fa-sharp")
menu = document.querySelector(".hamburger-menu")
faMenu.addEventListener('click', (e) => {
  // alteramos estilos para el menu y el body
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity")
  // alteramos su atributo scr para el icono del menu
  const currentRoute = e.target.querySelector(".fa-solid fa-bars");
  if (currentRoute == faMenu){
e.target.querySelector(".fa-sharp");
}else{
  e.target.querySelector(".fa-sharp");
}
});
