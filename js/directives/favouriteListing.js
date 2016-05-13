app.directive('favouriteListing', function() {
  return {
    restrict: 'E',
    scope: {
      listing: '=',
      callback: '&'
    },
    templateUrl: 'js/directives/favouriteListing.html'
  };
});