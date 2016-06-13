(function(){
  angular.module('nflpa.services', [])
  .factory('Main', function($http){
    var testRoute = function () {
     console.log('in service');
      return $http({
        method: 'GET',
        url: '/api/test'
      }).then(function(result){
        return result;
      }).catch(function(error){
        return error;
      })
    }

    return {
      testRoute: testRoute
    }
  })
})();

