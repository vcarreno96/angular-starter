(function () {

	'use strict';

	angular.module('app').controller('SignInController', SignInController);

	SignInController.$inject = ['authentication', '$state'];

	function SignInController(authentication, $state) {
		var vm = this;
		
		authentication.logout();
		
		vm.login = function () {
			if (authentication.login(vm.username, vm.password)) {
				$state.go('home.contacts');
			}
		}
	}

} ());