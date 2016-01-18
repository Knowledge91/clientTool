var App = angular.module('ClientTool', []);

App.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.name = '';
  $scope.club = '';
  $scope.telefon = '';
  $http.get('/clients.json').then(function(res){
      $scope.clients = res.data;                
  });
  $scope.updateStatus = function(client, str){
		$http.patch('/clients/' + client.id, {status: str}).then(function(res) {
			client.status = str;
		});
  }
}]);

