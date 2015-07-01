// declare global dependency list for app module only once (usually in config.js)
angular.module('myApp', ['ui.router']);

// configuration
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
	
	function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	
		.state('signin', {
			url: '/',
			templateUrl: 'app/signin.html'
		})
		
		.state('home', {
			abstract: true,
			templateUrl: 'app/home.html'
		})
		
		.state('home.blog', {
			url: '/blog',
			views: {
				'content': {
					templateUrl: 'app/blog.html'
				}	
			}
		})		
		
		.state('home.contacts', {
			url: '/contacts',
			views: {
				'content': {
					templateUrl: 'app/contacts.html',
				}	
			}
		});
	
	
	$urlRouterProvider.otherwise('/');
}]);