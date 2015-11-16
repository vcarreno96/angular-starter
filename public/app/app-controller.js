(function() {
	'use strict';
	
	angular.module('app')
		   .controller('AppController', AppController);
		   
	AppController.$inject = ['$scope', 'security', 'PERMISSIONS'];
		   
	function AppController($scope, security, PERMISSIONS) {
        // only use these properties inside of template expressions
        $scope.permissions = PERMISSIONS;
        $scope.isAuthorized = security.isAuthorized;		
	}
		
}());