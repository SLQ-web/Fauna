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

// initialise the page in packery layout with vanilla js
var elem = document.querySelector('.grid');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.grid-item',
  gutter: 0,
  columnWidth: 0,
  rowHeight: 0,
  isOriginTop: true,
  isHorizontal: false,
  percentPosition: true,
  stamp: '.stamp',
});