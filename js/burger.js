const body = document.querySelector('.body');
const menu = document.querySelector('.menu-burger');
const menuButton = document.querySelector('.menu-burger__button');

function toggleState() {
  if (menu.classList.contains('active-menu')) {
    menu.classList.remove('active-menu');
    body.classList.remove('block-scroll');
  } else {
    menu.classList.add('active-menu');
    body.classList.add('block-scroll');
  }
}

menuButton.addEventListener('click', toggleState);
