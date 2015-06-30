// declare global dependency list for app module only once (usually in config.js)
angular.module('myApp', ['ui.router']);

// configuration
angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	
		.state('signin', {
			url: '/',
			templateUrl: 'app/signin.html'
		})
		.state('contacts', {
			url: '/contacts',
			templateUrl: 'app/contacts.html',
		});
	
	
	$urlRouterProvider.otherwise('/');
});