'use strict';

// declare global dependency list for app module only once (usually in config.js)
angular.module('starterApp', []);

// add a controller to the app module
angular.module('starterApp')
.controller('testController', function($scope, $http) {
	
	$scope.test = 'Welcome to Angular!';
	$http.get('app/patients.json')
	.success(function(data){
		$scope.results = data.results;
		console.log(data);
	})
	.error(function(err){
		console.log(err);
	});
});