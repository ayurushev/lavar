app.controller('HomeController', ['$rootScope', '$scope', '$timeout', '$window', '$document', function($rootScope, $scope, $timeout, $window, $document) {
	$scope.step1 = false;
	$scope.step2 = false;
	$scope.step3 = false;

	$scope.complete = function(step) {
		$scope.$apply(function() {
			$scope[step] = true;
		});
	}

	$scope.collapse = function() {
		$rootScope.$broadcast('home-content-mode', {
			enabled: false,
			timeout: 0
		});
	}

	$rootScope.$on('home-content-mode', function(event, data) {
		$timeout(function() {
			anime({
				targets: '#mainMenu',
				translateY: function(el) {
					return data.enabled === true ? -el.offsetTop : 0;
				}
			});
			$scope.contentMode = data.enabled;
		}, data.timeout);
	});

	angular.element($window).on('resize', function(event) {
		if ($scope.contentMode) {
			var mainMenu = angular.element($document[0].querySelector('#mainMenu'));
			mainMenu.css('transform', 'translateY(-' + mainMenu[0].offsetTop + 'px)');// + mainMenu.offsetTop +')');
		}
  });

}]);
