app.controller('IntroController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
	$scope.step1 = false;
	$scope.step2 = false;
	$scope.step3 = false;
	$scope.step4 = false;
	$scope.step5 = false;

	$scope.complete = function(step) {
		$scope.$apply(function() {
			$scope[step] = true;
		});

		if (step === 'step5') {
			$rootScope.$broadcast('home-content-mode', { enabled: false });
			$state.go('home').then(function() {});
		}
	}
}]);
