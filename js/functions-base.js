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

  //convert msec value (with timezone offset) to datetime string variables
  consTime = new Date(brisbane);
  var brisHours = 19-consTime.getHours();
  var brisMinutes = 60-consTime.getMinutes();
  var brisSec = 60-consTime.getSeconds();

  //complete string for offset AEST local time
  //show CLOSED message if past closing time
  if (brisHours <0) {
    var timeLeft = "The State Library of Queensland is currently closed."
  } else {
    var timeLeft = "SLQ is open for <strong>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> more today";
  }

  //output adjusted time into page
  $("#countdown").html(timeLeft);
}

//Setup variable to update on setInterval function every 1000 ticks
var countdown = setInterval(ShowTime ,1000);

        // initialise the page in packery layout
        var $grid = $('.grid').packery({
          itemSelector: '.grid-item',
          gutter: 0,
          columnWidth: 0,
          rowHeight: 0,
          isOriginTop: true,
          isHorizontal: false,
          percentPosition: true,
          stamp: '.stamp',
        })

        // initialise the flickity sliders on page
        $('.main-gallery').flickity({
          // options
          cellAlign: 'left',
          contain: true,
          autoPlay: 2000,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true
        });
            
        // attach progress bar animation to object
        //Credits to http://www.jqueryscript.net/loading/Custom-Viewport-Based-jQuery-Progress-Bar-Plugin-Progressbar-js.html

        $('.donations').progressBar({
              height : "30",
              backgroundColor : "#E0E0E0",
              shadow : false,
              percentage : true,
              border : false,
              animation : true,
              animateTarget : true,
              barColor : "black",
         });

        // jQuery toggle for other sites buttons
          $(document).ready(function($) {
            $('.otherSites').find('.accordion-toggle').click(function(){

            $('.accordion-toggle').removeClass('activeState');
            if($(this).parent().find('.accordion-content').css('display')=='none'){
               $(this).addClass('activeState');
            }

              //Expand or collapse this panel
              $(this).next().slideToggle('fast');

              //Hide the other panels
              $(".accordion-content").not($(this).next()).slideUp('fast');

            });
          });
