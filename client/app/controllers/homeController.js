(function() {
  angular.module('nflpa')
  .controller('HomeController', function($scope, $rootScope, Main) {
    $scope.testRoute = function() {
      console.log('in controller');
      Main.testRoute().then(function(response){
        console.log(response.data);
      }).catch(function(error){
        console.log(error);
      });
    }
  })
})();
