myApp.controller('indexController',['$scope',function($scope) {

$.backstretch("img/backround1.jpg");
  $(".babu").click(function(){

  	$(".menu").fadeIn(2000);

  });

}]);


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

myApp.controller('naughtyController',['$scope',function($scope) {

$(".menu").css({"display":"inline"});
$.backstretch("img/warning-background.png");
$("body").css({
  "background-image": "url('')",
 });


//mypoem
$scope.message=["She can be as naughty as it can get",
                "She has powers to just see me and make me wet!!",
                "She can be naughty and sweet at the same time",
                "and can sound sweet as the wind chime!!",
                "She knows everything that turns me on",
                "and makes no delay to bring it on !!",
                 "you are naughty,sweet,cute and an expert",
                 "for me you are just perfect!!"
               ];

// $scope.message=" She'll sneak glimpses of you so she won't get caught staring, but you'll notice it anyway. She'll wait for you        to start a conversation, as as soon as you start one, she won't ever want to stop talking to you. She'll hit you and punch you playfully.She'll be mean to you specially, because it's easier to be mean than to actuallylet you in on how she feels.";


$(".enter").click(function() {

    $(".warningTab").fadeOut(1000);
    $.backstretch("img/universalbg.png");
    $(".warningafter").delay(1000).fadeIn(2000);
    $.backstretch("img/collage2.jpg");
});

$(".exit").click(function() {
  alert("bau daro nahi Enter par click karo");
  });




}]);

myApp.controller('sweetController',['$scope',function($scope) {
//$("body").css("background-image", "url('')");
//$.backstretch("");
$(".menu").css({"display":"inline"});

$(".sweet").fadeIn(1000);



$(".image1").adipoli({
    'overlayText' :'<h1 style="padding-top:40%" font-family:AlexBrush >"unki andaz main kuch mithaas hai,<br>har waqt bas unse milne ki  aas hai"</h1>',
    'startEffect' : 'overlay',
    'hoverEffect' : 'fold'
});
$(".image2").adipoli({
    'overlayText' :'<h1 style="padding-top:20%">aur jab unse milne ka mauka aata hai,<br>ye waqt kuch sookhe patte sa udd jata    hai</h1>',
    'startEffect' : 'overlay',
    'hoverEffect' : 'sliceDown'

});


$(".image3").adipoli({
    'overlayText' :'<h1 style="padding-top:30%">sochta hu,<br> ye pal yehi thaam lun </h3>',
    'startEffect' : 'overlay',
    'hoverEffect' : 'boxRainGrow'

});

$(".image4").adipoli({
    'overlayText' :'<h1 style="padding-top:30%">par ye pal bas agli baar,<br> kah kar chala jata hai</h1>',
    'startEffect' : 'overlay',
    'hoverEffect' : 'sliceUp'

});


}]);
