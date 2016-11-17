godOfCricketApp.controller('chartsController', ['$scope', '$rootScope', '$location', 'commonServices',
    function ($scope, $rootScope, $location, commonServices) {
        console.log('inside homeController');
        $scope.init = function () {
        };
        $scope.goBack = function() {
            console.log("go to previous page");
            history.back();
        };
    }
]);
