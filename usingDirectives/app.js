
angular.element(document).ready(function() {
    angular.bootstrap(document, ["myApp"], {
        strictDi: true
    });
});

var myApp = angular.module('myApp', ['view1', 'view2', 'view3']);

myApp.controller('loanCalculatorCtrl', function ($scope) {
    $scope.loan = {};
    $scope.showData = false;

    $scope.generateEmiTable = function () {
        var i, amount = $scope.loan.amount, amountPayable = $scope.loan.totalLoanAmount;

        $scope.emiTable = [];
        $scope.emiTable.push({'period': 0, 'emi': '-', 'interest': '-', 'principle': '-', 'balance': amount});
        for (i=0; i<$scope.loan.emiCount; i++) {
            $scope.emiTable.push({'period': i+1, 'emi': $scope.loan.monthlyEmi, 'interest': '', 'principle': '', 'balance': amount});
        }
    }

    $scope.calculate = function () {
        $scope.showData = true;
        $scope.loan.annualInterest = $scope.loan.AnnInterest/100;
        $scope.loan.monthlyInterest = $scope.loan.annualInterest / 12;
        $scope.loan.monthlyEmi = $scope.loan.amount * $scope.loan.monthlyInterest *
            Math.pow((1 + $scope.loan.monthlyInterest), $scope.loan.emiCount)/(Math.pow((1 + $scope.loan.monthlyInterest), $scope.loan.emiCount) - 1);
        $scope.loan.totalLoanAmount = $scope.loan.monthlyEmi * $scope.loan.emiCount;
        $scope.loan.interestPaid = $scope.loan.totalLoanAmount - $scope.loan.amount;
        $scope.generateEmiTable();
    }
});