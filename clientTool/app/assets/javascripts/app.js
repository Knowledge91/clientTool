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
  };
	$scope.clientEdit = function(client) {
		$scope.nameEdit = client.name;
		$scope.clubEdit = client.club;
		$scope.telefonEdit = client.telefon;
		$scope.commentEdit = client.comment;
		$scope.idEdit = client.id;
		$scope.countryEdit = client.country;
		$scope.statusEdit = client.status;
	};
}]);

App.controller('editCtrl', ['$scope', '$http', function($scope, $http) {
	
	$scope.clientSave = function() {
		clientEdit = {
			id: $scope.idEdit,
			country: $scope.countryEdit,
			name: $scope.nameEdit, 
			club: $scope.clubEdit, 
			telefon: $scope.telefonEdit, 
			comment: $scope.commentEdit,
			status: $scope.statusEdit
		};
		$http.patch('/clients/' + $scope.idEdit, clientEdit).then(function(res) {
			$scope.clients[$scope.idEdit-1] = clientEdit;
		});
	};
}]);
