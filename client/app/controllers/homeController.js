(function() {
  angular.module('nflpa')
  .controller('HomeController', function($scope, $location, $rootScope, Main) {
    $scope.contracts = [];
    $scope.transactions = [];
      
    $scope.getAllContracts = function () {
      Main.getAllContracts().then(function(response) {
        console.log('got data', response.data)
        $scope.contracts = response.data;
      }).catch(function(error) {
        console.log(error);
      });
    }

    $scope.getAllTransactions = function () {
      Main.getAllTransactions().then(function(response) {
        console.log('got data', response.data)
        $scope.transactions = response.data;
      }).catch(function(error) {
        console.log(error);
      });
    }

    $scope.testRoute = function() {
      console.log('in controller');
      Main.testRoute().then(function(response){
        console.log(response.data);
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.addContract = function() {
      var contract = {
        contract_id:Number($scope.contract_id),
        player_contact_id:Number($scope.player_contact_id),
        team_id:Number($scope.team_id),
        base_salary:Number($scope.base_salary),
        signing_bonus:Number($scope.signing_bonus),
        workout_bonus:Number($scope.workout_bonus),
        cap_value:Number($scope.cap_value),
        cash_value:Number($scope.cash_value),
        total_guarantee:Number($scope.total_guarantee),
        signing_date:$scope.signing_date,
        contract_disposition:$scope.contract_disposition,
        contract_disposition_date:$scope.contract_disposition_date,
        first_year:Number($scope.first_year),
        last_year:Number($scope.last_year),
        updated_by:$scope.updated_by
      }
      Main.addContract(contract).then(function(response){
        console.log(response.data);
        $scope.getAllContracts();
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.addTransaction = function() {
      var transaction = {
        transaction_id: Number($scope.transaction_id), 
        player_contact_id: Number($scope.player_contact_id),
        team_id: Number($scope.team_id),
        transaction_type: $scope.transaction_type,
        transaction_date: $scope.transaction_date,
        status: $scope.status,
        sub_status: $scope.sub_status,
        comments: $scope.comments,
        updated_by: $scope.updated_by,
      }
      
      Main.addTransaction(transaction).then(function(response){
        console.log(response.data)
        $scope.getAllTransactions();
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.getTransactionsByPlayerId = function (player_contact_id) {
      Main.getTransactionsByPlayerId(player_contact_id).then(function(response) {
        $scope.transactions = response.data;
      }).catch(function(error) {
        console.log(error);
      });
    }

    $scope.navToUpdate = function (id, itemType) {
      if(itemType === 'contract') {
        $location.path('/contract/' + id)
      }
      else if (itemType === 'transaction') {
        $location.path('/transaction/' + id)
      }
    }

    $scope.deleteContract = function (id) {
      Main.deleteContract(id).then(function(response){
        console.log(response.data);
        $scope.getAllContracts();
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.deleteTransaction = function (id) {
      Main.deleteTransaction(id).then(function(response){
        console.log(response.data);
        $scope.getAllTransactions();
      }).catch(function(error){
        console.log(error);
      });
    }

    $scope.getAllContracts();
    $scope.getAllTransactions();
  })
})();
