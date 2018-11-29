app.directive('backgroundTiles', ['$rootScope', '$timeout', function($rootScope, $timeout) {
	return {
		template: 	'<div class="tiles">' +
						'<div class="row" ng-repeat="x in [].constructor(5) track by $index">' +
							'<div class="tile" ng-repeat="x in [].constructor(5) track by $index"></div>' +
						'</div>' +
					'</div>',
		link: function(scope, element, attrs) {
			var tl1, tl2;

			var animate = function() {
				var steps = {
					step1: {
						easing: 'easeInOutQuart',
						scale: function(el, i, l) {
							return (l - i) + .05;
						},
						backgroundColor: [
							{ value: '#E28413' },
							{ value: '#F56416' },
							{ value: '#DD4B1A' }
						],
						duration: 1500,
						delay: function(el, i, l) {
							return i * 50;
						},
						opacity: 1
					},
					step2: {
						duration: 2000,
						easing: 'easeInOutQuart',
						backgroundColor: [
							{ value: '#EF271B' },
							{ value: '#EA1744' }
						],
						scale: .95,
						delay: function(el, i, l) {
							return i * 50;
						}
					},
					step3: {
						duration: 3000,
						easing: 'easeInOutQuart',
						backgroundColor: [
							{ value: '#E28413' },
							{ value: '#F56416' }
						],
						borderRadius: '50%',
						rotate: 180,
						scale: .8,
						opacity: function(el, i, l) {
							return i * .05;
						}
					},
					step4: {
						duration: 2000,
						easing: 'easeOutQuart',
						backgroundColor: [
							{ value: '#DD4B1A' },
							{ value: '#EF271B' }
						],
						scale: 4,
						opacity: 1
					},
					step5: {
						easing: 'easeOutQuart',
						duration: 4500,
						borderRadius: 0,
						scale: 1,
						opacity: 0
					}
				};

				tl1 = anime.timeline({ targets: '.tiles .row .tile' })
					.add(steps.step1)
					.add(steps.step2)
					.add(steps.step3)
					.add(steps.step4)
					.add(steps.step5);

				tl2 = anime.timeline({
					targets: 'body',
					easing: 'linear'
				}).add({
					offset: 4000,
					backgroundColor: '#263238'
				}).add({
					offset: 13500,
					backgroundColor: '#FFF'
				});
			}

			$timeout(function() {
				animate();
			});

			$rootScope.$on('window-blur', function() {
				tl1.pause();
				tl2.pause();
			})

			$rootScope.$on('window-focus', function() {
				tl1.play();
				tl2.play();
			});
		}
	};
}]);
