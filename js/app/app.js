var godOfCricketApp = angular.module('godOfCricket', ['ngRoute','ngAnimate']);

godOfCricketApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.template.html',
            controller: 'homeController'
        })
        /*.when('/questions/:questionNo', {
            templateUrl: 'view/questions.template.html',
            controller: 'questionsController'
        })
        .when('/result', {
            templateUrl: 'view/result.template.html',
            controller: 'resultController'
        })
        .when('/answers/:questionNo', {
            templateUrl: 'view/answers.template.html',
            controller: 'answersController'
        })
        .when('/thankyou', {
            templateUrl: 'view/thankyou.template.html',
            controller: 'thankyouController'
        })*/
        .otherwise("/home", {
            url: '/home'
        })
}]);
