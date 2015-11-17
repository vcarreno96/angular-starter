(function () {
	'use strict';

	angular.module('app.core')

		.factory('sessionStorage', sessionStorage)
		.factory('security', security);

	sessionStorage.$inject = ['$window'];
	security.$inject = ['sessionStorage', '$filter'];

	function security(sessionStorage, $filter) {
		
		var service = {
			login: login,
			logout: logout,
			isAuthenticated: isAuthenticated,
			isAuthorized: isAuthorized
		};
		
		return service;

		function login(username, password) {
		    var name,
                authToken,
				permissions;
		    if (username === 'victor') {
                name= 'Victor Carreno',
				authToken = 1234;
				permissions = [{name:'View Contacts'}, {name:'Edit Contacts'}, {name:'View Blog'}];
			}
		    if (username === 'dado') {
		        name= 'Dado Kljuco',
				authToken = 4567;
				permissions = [{name:'View Contacts'},  {name:'Edit Contacts'}];
			}
		    if (username === 'butch') {
		        name= 'Butch Johnson',
				authToken = 8912;
				permissions = [{
					name:'View Contacts'}
				];
			}			
			if(authToken) {
				sessionStorage.save('user', {
					name: name,
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
			return (sessionStorage.get('user'));
		}
		
		function isAuthorized(permissions) {
			var hasPermission = false,
				user = sessionStorage.get('user');
			
			if(user) {
				
				// allow passing single string object by converting to array
				if (!angular.isArray(permissions)) {
					permissions = [permissions];
				}
				
				permissions.forEach(function (permission) {
					if (!hasPermission) {
						// find a record in the user's permissions matching the permission name required
						hasPermission = $filter('filter')(user.permissions, {
							name: permission
						}, true).length > 0;
					}
				});
			}
			
			return (hasPermission);
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