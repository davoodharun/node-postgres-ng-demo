// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('nflpa', [
'ngRoute',
'nflpa.services'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/home.html',
      controller: 'HomeController'
    })
    .when('/contract/:id', {
      templateUrl: '../templates/update-contract.html',
      controller: 'updateContractController'
    })
    .when('/transaction/:id', {
      templateUrl: '../templates/update-transaction.html',
      controller: 'updateTransactionController'
    });
});
