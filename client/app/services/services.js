(function(){
  angular.module('nflpa.services', [])
  .factory('Main', function($http){

    var addContract = function(contract){
      console.log('in service');
      return $http({
        method: 'POST',
        url: '/api/contract',
        data: {
          contract: contract
        } 
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var getAllContracts = function(){
      return $http({
        method: 'GET',
        url: '/api/contracts'
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var getContractById = function (id) {
      return $http({
        method:'GET',
        url:'/api/contract/' + id
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var updateContract = function (contract) {
      return $http({
        method:'PUT',
        url:'/api/contract/' + contract.contract_id,
        data: contract
      }).then(function(result){
        return result
      }).catch(function(error){
        return error;
      });
    }

    var deleteContract = function (id) {
      return $http({
        method:'DELETE',
        url:'/api/contract/' + id
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var updateTransaction = function (transaction) {
      return $http({
        method:'PUT',
        url:'/api/transaction/' + transaction.transaction_id,
        data: transaction
      }).then(function(result){
        return result
      }).catch(function(error){
        return error;
      });
    }

    var addTransaction = function(transaction){
      return $http({
        method: 'POST',
        url: '/api/transaction',
        data: {
          transaction: transaction
        } 
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var getAllTransactions = function(){
      return $http({
        method: 'GET',
        url: '/api/transactions'
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var getTransactionById = function (id) {
      return $http({
        method:'GET',
        url:'/api/transaction/' + id
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var deleteTransaction = function (id) {
      return $http({
        method:'DELETE',
        url:'/api/transaction/' + id
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      })
    }

    var getTransactionsByPlayerId = function (player_contact_id) {
      return $http({
        method: 'GET',
        url: '/api/transaction/pcid/' + player_contact_id
      }).then(function(result) {
        return result;
      }).catch(function(error) {
        return error;
      });
    }

    return {
      getTransactionsByPlayerId: getTransactionsByPlayerId,
      updateTransaction: updateTransaction,
      updateContract: updateContract,
      getTransactionById: getTransactionById,
      deleteTransaction: deleteTransaction,
      deleteContract: deleteContract,
      getContractById: getContractById,
      addContract: addContract,
      addTransaction: addTransaction,
      getAllContracts: getAllContracts,
      getAllTransactions: getAllTransactions
    }
  });
})();

