// declare global dependency list for app module only once (usually in config.js)
angular.module('starterApp', []);

// add a controller to the app module
angular.module('starterApp')
.controller('testController', function($scope) {
	$scope.test = 'Welcome to Angular!';
});

function testController($scope){
	console.log('this is everywhere %s', $scope);
}


// 
// (function() { // wrapping your own code in an IIFE allows use of function form of 'use strict'
// 'use strict';
// 
// // declare global dependency list for app module only once (usually in config.js)
// angular.module('starterApp', []);
// 
// // add controllers to the app module
// angular.module('starterApp')
// .controller('testController', function($scope) {
// 	$scope.test = 'Welcome to Angular!';
// });	
// 	
// 	
// }());