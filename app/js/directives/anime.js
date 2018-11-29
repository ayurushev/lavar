app.directive('anime', [function() {
	return {
		scope: {
			effect: '@',
			onComplete: '&?'
		},
		link: function(scope, element, attrs) {
			var effects = {
				slideInLeft: {
					initial: {
						'transform': 'translateX(-100%)',
						'opacity': '0'
					},
					anime: {
						easing: 'linear',
						translateX: 0,
						opacity: 1,
					}
				},
				slideInTop: {
					initial: {
						'transform': 'translateY(-100%)',
						'opacity': '0'
					},
					anime: {
						easing: 'easeOutQuart',
						translateY: 0,
						opacity: 1
					}
				},
				slideInBottom: {
					initial: {
						'transform': 'translateY(100%)',
						'opacity': '0'
					},
					anime: {
						easing: 'easeOutQuart',
						translateY: 0,
						opacity: 1
					}
				},
				fadeIn: {
					initial: {
						'opacity': '0'
					},
					anime: {
						easing: 'easeOutQuart',
						opacity: 1
					}
				}
			};

			if (!scope.effect) {
				console.error('Undefined "effect" attribute!');
				return;
			}

			// apply initial
			element.css(effects[scope.effect].initial);

			anime(angular.extend({
				targets: element[0],
				complete: function() {
					if (angular.isFunction(scope.onComplete)) {
						scope.onComplete();
					}
				}
			}, effects[scope.effect].anime));
		}
	};
}]);
