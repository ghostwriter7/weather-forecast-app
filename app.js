const myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log('CONFIG')
    $routeProvider
        .when('/', { 
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        .when('/forecast', {
            templateUrl: 'views/forecast.html',
            controller: 'forecastController'
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

myApp.controller('mainController', ['$scope', function($scope) {

}]);

myApp.controller('forecastController', ['$scope', function($scope) {

}]);