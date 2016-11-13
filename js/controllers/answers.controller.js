questionApp.controller('controllerName', ['$scope', '$rootScope', '$location', 'commonServices',
    function ($scope, $rootScope, commonConstants, commonServices) {
        var self = $scope;
        console.log('inside controller');
        self.init = function () {
            $location.path("questions/1");
        };
    }
]);
