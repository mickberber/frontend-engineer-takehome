(function() {
    function directive() {
        return {
            templateUrl: 'visualize.data.tpl.html',
            scope: {
                //give directive access to SalesTransactionData from controller scope
                SalesTransactionData: '=data'
            },
            restrict: 'E',
            controller: ['$scope', 'transformFactory', function($scope, transformFactory) {
                //Transform data, using factory
                $scope.SalesTransactionData = transformFactory.transformData($scope.SalesTransactionData);
            }]
        }
    }

    angular.module('takeHomeApp').directive('visualizeData', directive)
})();
