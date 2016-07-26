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
