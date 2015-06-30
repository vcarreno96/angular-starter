
// declare global dependency list for app module only once (usually in config.js)
angular.module('starterApp', []);

// add controllers to the app module
angular.module('starterApp')
.controller('testController', function($scope) {
	$scope.test = 'Welcome to Angular!';
});