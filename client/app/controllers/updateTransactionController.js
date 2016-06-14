(function() {
  angular.module('app')
  .controller('updateTransactionController', function($scope, $location, $rootScope, Main) {
    $scope.transaction = {};
    $scope.transaction.transaction_id = $location.url().split('/')[2];
    $scope.getTransactionById = function () {
      Main.getTransactionById($scope.transaction.transaction_id).then(function(response){
        $scope.transaction = response.data;
      }).catch(function(error) {
        console.log(error)
      })
    }

    $scope.updateTransaction = function () {
      Main.updateTransaction($scope.transaction).then(function(response){
        console.log(response);      
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.getTransactionById();
  })
})();
