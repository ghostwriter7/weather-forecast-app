const myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log('CONFIG')
    $routeProvider
        .when('/', { 
            templateUrl: 'views/main.html',
        })
        .when('/about', {
            templateUrl: 'views/about.html',
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true); 
    $locationProvider.hashPrefix('');
}]);