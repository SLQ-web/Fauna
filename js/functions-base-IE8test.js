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

//Setup custom JS Opening hours Timer
function ShowTime() {

	//access system clock and get the time
	var aest = new Date();
	var localTime = aest.getTime();
	
	//obtain local UTC offset and convert to msec
	var localOffset = aest.getTimezoneOffset()*60000;
	
	//Get total UTC time in msec
	var utc = localTime + localOffset;
	//obtain and add destination UTC time offset (Brisbane, Australia +10)
	var offset = 10;
	var brisbane = utc + (3600000*offset);
	var brisDay = new Date(brisbane);
	var brisDay = brisDay.getDay();
	//Set weekend days with different opening hours
	//Set numbers representing weekend days - 0 for Sunday, 6 for Saturday
	if (brisDay==0 || brisDay==5 || brisDay==6) {
		hoursBase = 16;
		hoursBefore = 6
	}
	else {
		hoursBase = 19;
		hoursBefore = 9
	}
	
	//convert msec value (with timezone offset) to datetime string variables
	consTime = new Date(brisbane);
	var brisHours = hoursBase-consTime.getHours();
	var brisMinutes = 60-consTime.getMinutes();
	var brisSec = 60-consTime.getSeconds();
	
	//complete string for offset AEST local time
	//show CLOSED message if past closing time
	if (brisHours<0 || brisHours>hoursBefore) {
	var timeLeft = "<strong>The SLQ building is currently closed.</strong>";
        //currently set the first if/else statement to trigger after 12pm for testing. SVG line doesn't want to repeat-x when using inline.
    } else if (brisHours<3 || brisHours>hoursBefore) {
        var timeLeft = "SLQ will be open for another<br /><strong style='background-image:url(../img/wavy-underline2.svg);background-repeat:repeat-x;background-position:left 15px;background-size:10px 13px'>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
    } else if (brisHours<2 || brisHours>hoursBefore) {
        var timeLeft = "SLQ will be open for another<br /><strong style='background-image:url(../img/wavy-underline3.svg);background-repeat:repeat-x;background-position:left 15px;background-size:10px 13px'>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
    } else if (brisHours<1 || brisHours>hoursBefore) {
        var timeLeft = "SLQ will be open for another<br /><strong style='background-image:url(../img/wavy-underline4.svg);background-repeat:repeat-x;background-position:left bottom'>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
	}
        else {
	var timeLeft = "SLQ will be open for another<br /><strong>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
	//var timeLeft = brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec';
	}
	
	//output adjusted time into page
    document.getElementById("countdown").innerHTML = timeLeft;
}

//Setup variable to update on setInterval function every 1000 ticks
var countdown = setInterval(ShowTime ,1000);