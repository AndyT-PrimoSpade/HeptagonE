$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
    $('h1').css('color', '#222222');
  }, 2000);

});

setTimeout(function () {
  document.getElementById('navbar').style.display = 'flex';
}, 2100);
