//initialise flickity sliders with vanilla js
var elem = document.querySelector('.main-gallery');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true
});