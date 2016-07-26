myApp.config(function($routeProvider) {

  $routeProvider

  .when('/',{
    templateUrl:'pages/index1.html',
    controller:'indexController'
  })

  .when('/adorable',{
    templateUrl:'pages/adorable.html',
    controller:'adorableController'
  })

  .when('/sweet',{
    templateUrl:'pages/sweet.html',
    controller:'sweetController'
  })

  .when('/heavenly',{
    templateUrl:'pages/heavenly.html',
    controller:'heavenlyController'
  })

  .when('/naughty',{
    templateUrl:'pages/naughty.html',
    controller:'naughtyController'
  })

  .when('/awesome',{
    templateUrl:'pages/awesome.html',
    controller:'awesomeController'
  })


});
