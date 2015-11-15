(function(){

'use strict';

// declare global dependency list for app module only once (usually in config.js)
angular.module('app', [
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
					templateUrl: 'app/contacts/contacts.html',
				}	
			}
		});
	
	$urlRouterProvider.otherwise('/');
}]);

// filters
angular.module('app').filter("formatUserName", [function () {
    return function (value) {
            return value.title + ' ' + value.first + ' ' + value.last;
    };
}]);

// http://ng.malsup.com/#!/titlecase-filter
angular.module('app').filter('titlecase', function() {
    return function(s) {
        s = ( s === undefined || s === null ) ? '' : s;
        return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});   	
	
}());