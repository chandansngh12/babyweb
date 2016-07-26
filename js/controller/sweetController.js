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
