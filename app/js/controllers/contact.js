app.controller('ContactController', ['$scope', '$http', function($scope, $http) {
	$scope.form = {};

	$scope.sendMessage = function() {
		$scope.busy = true;
		$http.post('api/contact.php', $scope.form).then(function(res) {
			$scope.busy = false;
			var data = res.data;
			if (data.success == true) {
				$scope.form = {};
				alert('Спасибо! Ваше письмо отправлено.')
			} else {
				alert('Ошибка!')
			}
		});
	}
}]);
