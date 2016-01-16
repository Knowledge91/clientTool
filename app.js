var App = angular.module('App', []);

App.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.name = '';
  $scope.club = '';
  $scope.telefon = '';
    
  $http.get('clients.json').then(function(res){
      $scope.clients = res.data;                
      $scope.clients[0].status = "bg-danger";
      $scope.clients[0].comment = "no comments";
      $scope.updateStatus = function(client, str){
        client.status = str;
      }
   });
}]);
