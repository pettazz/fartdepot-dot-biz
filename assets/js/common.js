$(document).ready(() => {

  const menuEl = $('nav.main-menu');

  menuEl.get(0).addEventListener('animationend', () => {
    if(!menuEl.hasClass('menu-active')){
      menuEl.hide();
    }
    menuEl.removeClass('animate__animated')
      .removeClass('animate__slideOutLeft')
      .removeClass('animate__slideInLeft')
      .removeClass('animate__faster');
  });

  $('#menu-display-button').click(() => {
    $('nav.button').fadeOut();
    menuEl.addClass('menu-active animate__animated animate__slideInLeft animate__faster')
      .fadeIn();
  });
  $('#menu-close-button').click(() => {
    $('nav.button').fadeIn();
    menuEl.removeClass('menu-active');
    menuEl.addClass('animate__animated animate__slideOutLeft animate__faster');
  });

  $('.random-bg-replace').each(function(idx){
    // we have 12 bgs to choose from in _sass/random-bgs.scss
    let rand = Math.floor(Math.random() * 12) + 1;
    $(this).removeClass('random-bg-replace')
           .addClass('random-bg-' + rand.toString());
  });
  
});