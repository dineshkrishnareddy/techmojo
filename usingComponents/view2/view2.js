'use strict';

angular.module('view2', []);
angular.module('view2').component('view2', function () {
    return {
        templateUrl: './view2/view2.html',
        bindings: {
            showData: '<',
            loan: '='
        },
        controller: view2Ctrl
    }
});

function view2Ctrl($scope) {
    var scope = this, i;

    $scope.$on('showData', function () {
        var amount = scope.loan.amount, amountPayable = scope.loan.totalLoanAmount;

        scope.emiTable = [];
        scope.emiTable.push({'period': 0, 'emi': '-', 'interest': '-', 'principle': '-', 'balance': amount});
        for (i = 0; i < scope.loan.emiCount; i++) {
            scope.emiTable.push({
                'period': i + 1,
                'emi': scope.loan.monthlyEmi,
                'interest': '',
                'principle': '',
                'balance': amount
            });
        }
    });
}