app.directive('submenu', [function() {
  return {
    replace: true,
    transclude: true,
    scope: {
      onHide: '&'
    },
    template: '<div class="submenu flex center">' +
                '<a href="javascript:;" ng-click="menu = !menu">' +
  		            '<svg id="i-chevron" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">' +
                    '<path d="M12 30 L24 16 12 2" ng-hide="menu" />' +
                    '<path d="M20 30 L8 16 20 2" ng-show="menu" />' +
                  '</svg>' +
  	            '</a>' +
                '<div ng-transclude ng-show="menu"></div>' +
              '</div>',
    link: function(scope, element, attrs) {
      scope.menu = false;
      scope.$watch('menu', function(newVal, oldVal) {
        if (newVal === false && oldVal) {
          if (angular.isFunction(scope.onHide)) {
            scope.onHide();
          }
        }
      });
    }
  };
}]);
