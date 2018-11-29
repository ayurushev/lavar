app.directive('scrollHandler', ['$document', '$timeout', '$transitions', function($document, $timeout, $transitions) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var mainMenu, content, cssContentHeight, cssContentHeight, cssContentTop, lastScrollTop = 0, timeout;

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
				if (content.scrollHeight <= window.innerHeight) return;
				$timeout.cancel(timeout);
				collapse(content.scrollTop >= lastScrollTop);
				timeout = $timeout(function() {
					lastScrollTop = content.scrollTop;
				}, 150);
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
