var app = angular.module("ticApp", ["ui.router", "ngAnimate"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true).hashPrefix('!');

	$stateProvider

	// weather
  .state("weather", {
    url:"/",
    templateUrl: "views/weather.html"
  })

	// the startups
  .state("startups", {
    url:"/startups",
    templateUrl: "views/startups.html"
  })

	// faces
  .state("familiarfaces", {
    url:"/familiarfaces",
    templateUrl: "views/faces.html"
  })

	// facts
  .state("funfacts", {
    url:"/funfacts",
    templateUrl: "views/facts.html"
  })

  $urlRouterProvider.otherwise('/');

})
