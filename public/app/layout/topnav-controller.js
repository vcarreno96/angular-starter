(function () {

	'use strict';

	angular.module('app').controller('TopNavController', TopNavController);
	
	TopNavController.$inject = ['$state'];
	
	function TopNavController($state) {

		var vm = this;
		vm.signout = function(){
			$state.go('signin');		
		}
	}

}());