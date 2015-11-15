(function(){

'use strict';

// declare global dependency list for app module only once (usually in config.js)
angular.module('app', [
	'app.core',
	'ui.router',
	'ui.bootstrap']);

// configuration
angular.module('app').config(['$stateProvider', '$urlRouterProvider',
	
	function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		
		.state('signin', {
			url: '/',
			templateUrl: 'app/signin/signin.html'
		})
		
		.state('home', {
			abstract: true,
			templateUrl: 'app/layout/home.html'
		})
		
		.state('home.blog', {
			url: '/blog',
			views: {
				'content': {
					templateUrl: 'app/blog/blog.html'
				}	
			}
		})
		
		.state('home.contacts', {
			url: '/contacts',
			views: {
				'content': {
					templateUrl: 'app/contacts/contacts.html',
				}	
			}
		});
	
	$urlRouterProvider.otherwise('/');
}]);
	
}());