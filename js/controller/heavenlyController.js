myApp.controller('heavenlyController',['$scope',function($scope) {
  $(".menu").css({"display":"block"});
 $scope.message=["Babu, I chose the word Heavnly because i was in hell when you came into my life.",
                  "I was all brocken up and trying to get myself together.",
                  "Like an angel you came into my life and since then its all going great.",
                  "Things have changed so very great with you and will be always great when you are with me.",
                  "With so much you have given me i can only say",
                  "for always being with me!!"
                ];
  $.backstretch([
      "img/chaa.jpg"
    , "img/pagg.jpg"
    , "img/sharam.jpg"
  ], {duration: 3000, fade: 750})

  $(".heaven").adipoli({
      'overlayText' :'<h1 style="padding-top:50%">something goes here</h1>',
      'startEffect' : 'overlay',
      'hoverEffect' : 'fold'
  });

}]);
