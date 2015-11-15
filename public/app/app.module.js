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
			views: {
				'@': {
					templateUrl: 'app/layout/home.html'
				},
				'nav@home': {
					templateUrl: 'app/layout/topnav.html'
				}
			},
			data: {
				proxy: 'home.contacts'
			}			
		})
		
		.state('home.contacts', {
			url: '/contacts',
			views: {
				'content@home': {
					templateUrl: 'app/contacts/contacts.html',
				}	
			}
		})		
		
		.state('home.blog', {
			url: '/blog',
			views: {
				'content@home': {
					templateUrl: 'app/blog/blog.html'
				}	
			}
		});

	
	$urlRouterProvider.otherwise('/');
}]);
	
}());