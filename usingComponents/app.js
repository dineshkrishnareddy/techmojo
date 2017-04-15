
angular.element(document).ready(function() {
    angular.bootstrap(document, ["myApp"], {
        strictDi: true
    });
});

var myApp = angular.module('myApp', ['view1', 'view2']);

myApp.controller('loanCalculatorCtrl', function ($scope) {
    $scope.loan = {};
    $scope.showData = false;

    $scope.calculate = function () {
        $scope.showData = true;
        $scope.$broadcast('showData', $scope.showData);
    }
});