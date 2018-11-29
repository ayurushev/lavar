app.directive('screenshots', ['$document', '$compile', function($document, $compile) {
	return {
		replace: true,
		scope: {
			files: '='
		},
		template: 	'<a href="javascript:;" ng-click="zoomIn(files[0])" title="Скриншоты ({{ files.length }})">' +
						'<svg id="i-camera" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">' +
							'<path d="M2 8 L 9 8 12 4 20 4 23 8 30 8 30 26 2 26 Z" />' +
    						'<circle cx="16" cy="16" r="5" />' +
						'</svg>' +
					'</a>',
		link: function(scope, element, attrs) {
			var body = angular.element($document).find('body'), popup;
			scope.path = 'img/ss/';

			scope.dismiss = function() {
				popup.remove();
			}

			scope.next = function() {
				scope.index++;
				if (scope.index == scope.files.length) {
					scope.index = 0;
				}
				scope.url = scope.path + scope.files[scope.index];
			}

			scope.prev = function() {
				scope.index--;
				if (scope.index == -1) {
					scope.index = scope.files.length - 1;
				}
				scope.url = scope.path + scope.files[scope.index];
			}

			scope.zoomIn = function(file) {
				scope.index = scope.files.indexOf(file);
				scope.url = scope.path + file;

				popup = $compile(angular.element(
					'<div style="background: #CCC no-repeat center center/contain url(\'{{ url }}\')" load="alert(\'success\');" class="screenshots-popup">' +
						'<div class="nav prev" ng-click="prev()" ng-if="files.length > 1">' +
							'<svg id="i-arrow-left" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">' +
    							'<path d="M10 6 L2 16 10 26 M2 16 L30 16" />' +
							'</svg>' +
						'</div>' +
						'<div class="nav next" ng-click="next()" ng-if="files.length > 1">' +
							'<svg id="i-arrow-right" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">' +
								'<path d="M22 6 L30 16 22 26 M30 16 L2 16" />' +
							'</svg>' +
						'</div>' +
						'<div class="nav close" ng-click="dismiss()">' +
							'<svg id="i-close" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">' +
    							'<path d="M2 30 L30 2 M30 30 L2 2" />' +
							'</svg>' +
						'</div>' +
					'</div>'
				))(scope);
				body.append(popup);

				body.one('keypress keydown', function(event) {
					if (event.which === 27) { // 27 = esc key
						scope.dismiss();
					}
				});
			}
		}
	};
}]);
