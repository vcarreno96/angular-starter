(function(){

'use strict';

// declare global dependency list for app module only once (usually in config.js)
angular.module('app', [
	'ngAnimate', 
	'app.core',
	'ui.router',
	'ui.bootstrap']);

// configuration
angular.module('app')

        .run(['$state', '$rootScope', 'security',
		  function ($state, $rootScope, security) {
			    
                $rootScope.$on('$stateChangeStart', function (event, next) {
					var authorizedPermissions;
					// prevent unauthenticated users from navigating to any route except signin
                    if (next.url !== "/" && !security.isAuthenticated()) {
						event.preventDefault();
						$state.go('signin');
						toastr.error('Who are you??', 'Error');
                    } else {
						// check if we need to do authorization checks on the route
						if (next.data && next.data.authorizedPermissions) {
							authorizedPermissions = next.data.authorizedPermissions;
							// if route has permissions applied to it
							if (authorizedPermissions) {
								if (!security.isAuthorized(authorizedPermissions)) {
									event.preventDefault();
									toastr.error('You want what??', 'Error');
								}
							}							
						}						
					}
                });
            }])

		.config(['$stateProvider', '$urlRouterProvider', 'PERMISSIONS',
			
			function($stateProvider, $urlRouterProvider, PERMISSIONS) {
			
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
					},
					data: {
						authorizedPermissions: [PERMISSIONS.viewContacts]
					}
				})		
				
				.state('home.blog', {
					url: '/blog',
					views: {
						'content@home': {
							templateUrl: 'app/blog/blog.html'
						}	
					},
					data: {
						authorizedPermissions: [PERMISSIONS.viewBlog]
					}					
				});
				
			$urlRouterProvider.otherwise('/');
		}]);
	
}());