var godOfCricketApp = angular.module('godOfCricket', ['ngRoute','ngAnimate']);

godOfCricketApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.template.html',
            controller: 'homeController'
        })
        .when('/charts/:chartName', {
            templateUrl: 'view/charts.template.html',
            controller: 'chartsController'
        })
        .otherwise("/home", {
            url: '/home'
        })
}]);
