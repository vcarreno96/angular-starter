(function () {
	'use strict';

	angular.module('app.core')

		.factory('sessionStorage', sessionStorage)
		.factory('authentication', authentication)
		.factory('authorization', authorization);

	sessionStorage.$inject = ['$window'];
	authentication.$inject = ['sessionStorage'];
	authorization.$inject = ['authentication'];


	function authentication(sessionStorage) {
		
		var service = {
			login: login,
			logout: logout,
			isAuthenticated: isAuthenticated
		};
		
		return service;

		function login(username, password) {
			var authToken,
				permissions;
			if (username === 'victor'){
				authToken = 1234;
				permissions = ['Edit Contact', 'View Blog'];
			}
			if (username === 'dado') {
				authToken = 4567;
				permissions = ['Edit Contact'];
			}
			if(authToken) {
				sessionStorage.save('user', {
					name: username,
					token: authToken,
					permissions: permissions
				});
			}
			
			return (authToken ? true : false);
		}

		function logout() {
			sessionStorage.remove('user');				
		}
		
		function isAuthenticated() {
			return (!!sessionStorage.get('user'));
		}
	}

	function authorization(authentication) {
		var service = {
			login: login,
			logout: logout
		};
		return service;

		function login(username, password) {

		}

		function logout() {
			
		}
	}

	function sessionStorage($window) {
		var service = {
			get: get,
			save: save,
			remove: remove
		};
		
		return service;
		
		function get (key) {
			return JSON.parse($window.sessionStorage.getItem(key));
		}

		function save (key, data) {
			$window.sessionStorage.setItem(key, JSON.stringify(data));
		}

		function remove (key) {
			$window.sessionStorage.removeItem(key);
		}
	}

} ());