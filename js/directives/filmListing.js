app.directive('filmListing', function() {
  return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: 'js/directives/filmListing.html'
  };
});