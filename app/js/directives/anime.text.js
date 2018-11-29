app.directive('animeText', ['$rootScope', function($rootScope) {
	return {
		scope: {
			effect: '@',
			onComplete: '&?',
			keep: '&?',
		},
		link: function(scope, element, attrs) {
			var an;
			element.css('user-select', 'none');
			var duration = attrs.duration || 1000;

			charming(element[0]);
			var chars = element[0].querySelectorAll('span[class^="char"], img');
			angular.element(chars).css({
				'display': 'inline-block',
				'transform': 'translateZ(0)',
				'opacity': '0'
			});
			// replace ' ' with &nbsp;
			angular.forEach(chars, function(char) {
				if (char.innerHTML === ' ') {
					char.innerHTML = '&nbsp;';
				}
			});

			var effects = {
				fx1: {
					initial: { 'transform': 'scale(15)' },
					anime: {
						duration: 4000,
						delay: function(el, i) {
							return i * 150;
						},
						easing: 'easeOutQuart',
						scale: 1,
						opacity: 1
					}
				},
				fx2: {
					initial: { 'transform': 'rotateY(90deg) translateY(-45px)' },
					anime: {
						delay: function(el, i) {
							return i * 50;
						},
						easing: 'easeOutQuart',
						rotateY: 0,
						translateY: 0,
						opacity: 1
					}
				},
				fx3: {
					initial: {},
					anime: {
						duration: 2000,
						easing: 'easeInOutQuart',
						delay: function(el, i) {
							return i * 50;
						},
						opacity: 1
					}
				},
				fx4: {
					initial: { 'transform': 'translateX(-45px)' },
					anime: {
						duration: duration,
						easing: 'easeOutQuart',
						direction: 'alternate',
						delay: function(el, i) {
							return i * 25;
						},
						translateX: 0,
						opacity: 1
					}
				}
			};

			if (!scope.effect) {
				console.error('Undefined "effect" attribute!');
				return;
			}

			// apply initial
			angular.element(chars).css(effects[scope.effect].initial);

			an = anime(angular.extend({
				targets: chars,
				complete: function() {
					if (angular.isFunction(scope.onComplete)) {
						scope.onComplete();
					}

					if (!scope.keep) {
						element.remove();
					}
				}
			}, effects[scope.effect].anime));

			$rootScope.$on('window-blur', an.pause);
			$rootScope.$on('window-focus', an.play);
		}
	};
}]);
