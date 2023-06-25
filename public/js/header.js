const hamburger = document.querySelector('.hamburgerIcon');
const menu = document.querySelector('.mainMenu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('hidden');
  console.log('hamburger activation!')
});