const elToggler = document.querySelector('.site-header__hamburger');
const elModal = document.querySelector('.nav-modal');

elToggler.addEventListener('click', function(evt){
  evt.preventDefault();
  elModal.classList.toggle('nav-modal--active');
  elToggler.classList.toggle('site-header__hamburger--active');
});
