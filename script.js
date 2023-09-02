const menuIcon = document.querySelector('.menu-icon');
const navbarList = document.querySelector('.navbar ul');

let isMenuOpen = false;

menuIcon.addEventListener('click', () => {
  if (isMenuOpen) {
    navbarList.style.display = 'none';
    isMenuOpen = false;
  } else {
    navbarList.style.display = 'flex';
    isMenuOpen = true;
  }
});