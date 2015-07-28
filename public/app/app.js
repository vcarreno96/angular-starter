// declare global dependency list for app module only once (usually in config.js)
angular.module('myApp', ['ui.router', 'ui.bootstrap']);

// configuration
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
	
	function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	
		.state('signin', {
			url: '/signin',
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
			url: '/',
			views: {
				'content': {
					templateUrl: 'app/contacts.html',
				}	
			}
		});
	
	$urlRouterProvider.otherwise('/');
}]);

// controllers
angular.module('myApp').controller('contactsController', ['$scope', '$http', function($scope, $http) {
	$scope.test = 'Hello';
	$http.get('app/patients.json')
	.success(function(data){
		$scope.Data = data.results;
		console.log(data);
	})
	.error(function(err){
		console.log(err);
	});
	
}]);

// filters

angular.module('myApp').filter("formatUserName", [function () {
    return function (value) {
            return value.title + ' ' + value.first + ' ' + value.last;
    };
}]);

// http://ng.malsup.com/#!/titlecase-filter
angular.module('myApp').filter('titlecase', function() {
    return function(s) {
        s = ( s === undefined || s === null ) ? '' : s;
        return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});   