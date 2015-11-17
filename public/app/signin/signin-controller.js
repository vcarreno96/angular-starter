(function () {

	'use strict';

	angular.module('app').controller('SignInController', SignInController);

	SignInController.$inject = ['security', '$state'];

	function SignInController(security, $state) {
		var vm = this;
		
		// clear previous user from sessions
		security.logout();
		
		vm.login = function () {
			if (security.login(vm.username, vm.password)) {
			    $state.go('home.contacts');
			} else {
			    toastr.error('You are a  malicious person!', 'Authentication', { timeOut: 2000 });
			}
		}
	}

} ());