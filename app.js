const myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log('CONFIG')
    $routeProvider
        .when('/', { 
            templateUrl: 'views/main.html',
        })
        .when('/forecast', {
            templateUrl: 'views/forecast.html',
        })
        .when('/not-found', {
            templateUrl: 'views/not-found.html'
        })
        .otherwise({
            redirectTo: '/not-found'
        });

    $locationProvider.html5Mode(true); 
    $locationProvider.hashPrefix('');
}]);