     //countdown timer

      function ShowTime() {
        var now = new Date();
        var hrs = 19-now.getHours();
        var mins = 60-now.getMinutes();
        var secs = 60-now.getSeconds();
            timeLeft = "" +hrs+' hrs '+mins+' min '+secs+' sec';
        $("#countdown").html(timeLeft);
      }

      //var countdown;
      // This function will never work Corin, see edited code below for setInterval
      // Also check out the clearInterval function in stop-all-animations.js
      function StopTime() {
      	clearInterval(ShowTime);
      }

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
