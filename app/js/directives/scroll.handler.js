app.directive('scrollHandler', ['$document', '$timeout', '$transitions', function($document, $timeout, $transitions) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var mainMenu, content, cssMenuHeight, cssContentHeight, cssContentTop, lastScrollTop = 0, timeout;

			var collapse = function(value) {
				angular.element(mainMenu).css({
					top: mainMenu.offsetTop + 'px',
					height: value ? '15%' : cssMenuHeight
				});

				element.css({
					top: value ? '15%' : cssContentTop,
					height: value ? '85%' : cssContentHeight
				});
			}

			element.on('scroll', function(event) {
				//if (content.scrollHeight <= window.innerHeight) return;
				// in iOS thanks to momentum/inertial scroll scrollTop can have "out of bounds" values
				var scrollTop = content.scrollTop + content.clientHeight;
				if (scrollTop >= content.scrollHeight || scrollTop <= content.clientHeight) {
					event.preventDefault(); // important to prevent mobile scroll "stalling"
					return;
				}
				collapse(scrollTop > lastScrollTop);
				lastScrollTop = scrollTop;
			});

			$transitions.onStart({}, function(trans) {
				collapse(false);
			});

			$timeout(function() {
  			mainMenu = $document[0].querySelector('#mainMenu');
				content = $document[0].querySelector('#content');
				cssMenuHeight = mainMenu.style.height;
				if (content) {
					cssContentHeight = content.style.height;
					cssContentTop = content.style.top;
				}
			});
		}
	};
}]);
