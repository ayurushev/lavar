app.directive('svgIcon', [function() {
  return {
    replace: true,
    transclude: true,
    scope: {
      id: '@'
    },
    template: '<svg id="{{ id }}" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" ng-transclude></svg>'
  };
}]);
