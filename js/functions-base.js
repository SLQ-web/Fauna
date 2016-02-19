   //countdown timer

    function ShowTime() {
      var now = new Date();
      var hrs = 19-now.getHours();
      var mins = 60-now.getMinutes();
      var secs = 60-now.getSeconds();
          timeLeft = "" +hrs+' hrs '+mins+' min '+secs+' sec';
      $("#countdown").html(timeLeft);
    }

    var countdown;
    function StopTime() {
    	clearInterval(countdown);
    	
    }

    setInterval(ShowTime ,1000);      