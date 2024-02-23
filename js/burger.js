const menu = document.querySelector('.menu-burger');
const menuButton = document.querySelector('.menu-burger__button');

function toggleState() {
  if (menu.classList.contains('active-menu')) {
    menu.classList.remove('active-menu');
  } else {
    menu.classList.add('active-menu');
  }
}

menuButton.addEventListener('click', toggleState);
