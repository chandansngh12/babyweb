
myApp.controller('adorableController',['$scope','$interval',function($scope, $interval) {

$(".menu").css({"display":"inline"});

  $("body").css({

    "background-repeat":"no-repeat",
     //"background-position": "50% 0%",
     "background-attachment": "fixed",
    "background-size":"100% 100%"
   });

   $.backstretch("img/moon_back.jpg");

$(".tofade").fadeIn(1000);

  $scope.messageArray = [
    '"It was not easy but,I found the most Adorable thing in the World"',
    'Babu,I can spend all my time just looking at you(agar aap chup raho toh,sir khati ho waise aap chapad chapda karke)',
    'I wonder if you will ever realize how adorable you are',

  ];
  $scope.messageArray[0];

  $('.new1,.new2').css({ height: $(window).innerHeight() , width: $(window).innerWidth() });
  $(window).resize(function(){
    $('.new1,.new2').css({ height: $(window).innerHeight() , width: $(window).innerWidth() });
  });

  $(".message").fadeIn(500);

  //  $scope.i=1;
  //
  // $interval(function () {
  //     //$(".message").fadeOut(500);
  //
  //      $scope.message = $scope.messageArray[ $scope.i];
  //       $scope.i++;
  //       if( $scope.i >= $scope.messageArray.length)
  //       {
  //         $scope.i=0;
  //       }
  //       $(".message").delay(500).fadeToggle(500);
  //  }, 6000);

}]);
