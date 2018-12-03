app.controller('ContactController', ['$scope', '$http', 'vcRecaptchaService', function($scope, $http, vcRecaptchaService) {
	$scope.form = {};

	$scope.sendMessage = function() {
		$scope.busy = true;
		$http.post('api/contact.php', $scope.form).then(function(res) {
			$scope.busy = false;
			var data = res.data;
			if (data.success == true) {
				alert('Спасибо! Ваше письмо отправлено.');
				$scope.form = {};
				vcRecaptchaService.reload();
			} else {
				alert('Ошибка!');
			}
		});
	}
}]);
