'use strict';

// declare global dependency list for app module only once (usually in config.js)
angular.module('starterApp', ['ui.router']);

// configuration
angular.module('starterApp')
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	$stateProvider
	
	.state('signin', {
		url: '/',
		templateUrl: 'app/signin.html'
	});
});

// add controllers to the app module
angular.module('starterApp')
.controller('signinController', function($scope) {
	
});

angular.module('starterApp')
.controller('testController', function($scope) {
	$scope.test = 'Welcome to Angular!';
});