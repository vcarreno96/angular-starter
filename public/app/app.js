
angular.module('myApp', ['ui.router']);

// configuration
angular.module('myApp')
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	$stateProvider
	
	.state('signin', {
		url: '/',
		templateUrl: 'app/signin.html'
	});
});
