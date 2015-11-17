(function () {

	'use strict';

	angular.module('app').controller('TopNavController', TopNavController);
	
	TopNavController.$inject = ['$scope', '$state', 'sessionStorage'];
	
	function TopNavController($scope, $state, sessionStorage) {
	    var vm = this;
	    var user = sessionStorage.get('user');
	    vm.permissions = '';
        if (user) {
            vm.userName = user.name;
            vm.permissions = user.permissions;
        }

	    // facade on the state service routing method
        vm.signout = function () {
			$state.go('signin');		
		}
	}

}());