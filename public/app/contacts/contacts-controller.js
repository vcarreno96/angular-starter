(function () {

	'use strict';

	angular.module('app').controller('ContactsController', ContactsController);

	ContactsController.$inject = ['$scope', '$http', '$uibModal'];

	function ContactsController($scope, $http, $uibModal) {

		var vm = this;

		// open edit user modal
		vm.openModal = function (item) {

			 $uibModal.open({
				templateUrl: 'app/contacts/contacts-edit.html',
				//backdrop: 'static',
				controller: function (user, $uibModalInstance) {
					$scope.User = user;
					
					$scope.ok = function() {
					    toastr.success('Saved contact info for ' + $scope.User.name.first + '!', 'Success', { timeOut: 500 });
						$uibModalInstance.close();
					}
					$scope.cancel = function () {
						$uibModalInstance.dismiss('cancel');
					};
				},
				size: 'md',
				resolve: {
					user: function () {
						return angular.copy(item.user);
					}
				},
                scope: $scope
			});
		};	
	
		// load initial daa
		$http.get('app/contacts/contacts.json').success(function (data) {
			vm.Data = data.results;
		})
		.catch(function (err) {
			console.log(err);
		});
	}

}());