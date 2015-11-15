(function () {

	'use strict';

	angular.module('app').controller('ContactsController', ContactsController);

	ContactsController.$inject = ['$scope', '$http', '$modal'];

	function ContactsController($scope, $http, $modal) {

		var vm = this;

		// open edit user modal
		vm.openModal = function (item) {

			 $modal.open({
				templateUrl: 'app/contacts/contacts-edit.html',
				backdrop: 'static',
				animation: true,
				controller: function (user, $modalInstance) {
					$scope.User = user;
					
					$scope.ok = function() {
						toastr.success('Saved contact info for ' + $scope.User.name.first + '!', 'Success');
						$modalInstance.close();
					}
					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},
				resolve: {
					user: function () {
						return angular.copy(item.user);
					}
				},
				size: 'md',
				scope: $scope // -- ContactsController $scope
			});
		};	
	
		// load initial daa
		$http.get('app/contacts/patients.json').success(function (data) {
			vm.Data = data.results;
		})
		.catch(function (err) {
			console.log(err);
		});
	}

}());