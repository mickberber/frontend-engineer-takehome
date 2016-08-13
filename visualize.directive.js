(function() {
    function directive() {
        return {
            templateUrl: 'visualize.data.tpl.html',
            scope: {
                //edit this
                SalesTransactionData: '=data'
            },
            restrict: 'E',
            controller: ['$scope', 'transformFactory', function($scope, transformFactory) {
                $scope.SalesTransactionData = transformFactory.transformData($scope.SalesTransactionData);
            }]
        }
    }

    angular.module('takeHomeApp').directive('visualizeData', directive)
})();
