const hamburger = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburger.addEventListener('click', () =>{
  navbarLinks.classList.toggle('active');
  console.log('hamburger activation!')
});