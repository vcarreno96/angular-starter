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
			logout: logout
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
			return authToken;
		}

		function logout() {

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

	}

} ());