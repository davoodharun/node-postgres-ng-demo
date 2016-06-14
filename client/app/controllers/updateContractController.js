(function() {
  angular.module('nflpa')
  .controller('updateContractController', function($scope, $location, $rootScope, Main) {
    $scope.contract = {};
    $scope.contract.contract_id = $location.url().split('/')[2];
    $scope.getContractById = function () {
      Main.getContractById($scope.contract.contract_id).then(function(response){
        $scope.contract = response.data;
      }).catch(function(error) {
        console.log(error)
      })
    }

    $scope.updateContract = function () {
      Main.updateContract($scope.contract).then(function(response){
        console.log(response);      
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.getContractById();
  })
})();
