'use strict';

angular.module('view1', []);
angular.module('view1').component('view1', function () {
    return {
        templateUrl: './view1/view1.html',
        bindings: {
            showData: '<',
            loan: '='
        },
        controller: view1Ctrl
    }
});

function view1Ctrl($scope) {
    var scope = this;

    $scope.$on('showData', function () {
        scope.loan.annualInterest = scope.loan.AnnInterest/100;
        scope.loan.monthlyInterest = scope.loan.annualInterest / 12;
        scope.loan.monthlyEmi = scope.loan.amount * scope.loan.monthlyInterest *
            Math.pow((1 + scope.loan.monthlyInterest), scope.loan.emiCount)/(Math.pow((1 + scope.loan.monthlyInterest), scope.loan.emiCount) - 1);
        scope.loan.totalLoanAmount = scope.loan.monthlyEmi * scope.loan.emiCount;
        scope.loan.interestPaid = scope.loan.totalLoanAmount - scope.loan.amount;
    });
}