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
			var authToken;
			if (username === 'victor'){
				authToken = 1234;
			}
			if (username === 'dado') {
				authToken = 4567;
			}
			if(authToken) {
				
				sessionStorage.save('user', {
					name: username,
					token: authToken
				});
			}
			
			return (authToken ? true : false);
		}

		function logout() {
			sessionStorage.remove('user');				
		}
		
		function isAuthenticated() {
			var user = sessionStorage.get('user');
			// check if user is still valid
			if(user) {
				return (service.login(user.name, ''));
			}
			return false;
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