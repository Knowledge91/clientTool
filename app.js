var App = angular.module('App', []);


App.controller('mainCtrl', ['$scope', '$http' ,function($scope, $http) {
    $http.get('clients.json').then(function(res){
        $scope.clients = res.data;                
     });
}]);
