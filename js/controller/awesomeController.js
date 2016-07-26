myApp.controller('awesomeController',['$scope',function($scope) {
  $(".menu").css({"display":"inline"});
  $.backstretch("img/universalbg.png");

  $(document).ready(function() {
    //destroying
      if (typeof $.fn.fullpage.destroy == 'function') {
          $.fn.fullpage.destroy('all');
      }


       $('#fullpage').fullpage({
            sectionsColor: ['#f1e6ca', '#4BBFC3', '#7BAABE', 'whitesmoke'],
            css3:true
         }
       );
    });

    $(".slide1").adipoli({
        'overlayText' :'<h1 style="padding-top:40%" font-family:AlexBrush >"This pic proves it!!"</h1>',
        'startEffect' : 'overlay',
        'hoverEffect' : ''
    });

    $(".slide2").adipoli({
        'overlayText' :'<h1 style="padding-top:40%" font-family:AlexBrush >Your <b>EYES</b> say it all the time!!"</h1>',
        'startEffect' : 'overlay',
        'hoverEffect' : ''
    });

    $(".slide3").adipoli({
        'overlayText' :'<h1 style="padding-top:40%" font-family:AlexBrush >"So does your <b>Lips</b>"</h1>',
        'startEffect' : 'overlay',
        'hoverEffect' : ''
    });
    $(".section3").adipoli({
        'overlayText' :'<h1 style="padding-top:40%" font-family:AlexBrush >"<b>I LOVE YOU MY AWWWWWSOME BABU</b>"</h1>',
        'startEffect' : 'overlay',
        'hoverEffect' : ''
    });





}]);
