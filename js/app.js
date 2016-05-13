var app = angular.module("FilmsfyApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
      controller: 'CarouselController',
      templateUrl: 'views/carousel.html'
  })
    .when('/nowplaying',{
      controller: 'MainController',
      templateUrl: 'views/listfilms.html'
  })
    .when('/comming', {
      controller: 'CommingController',
      templateUrl: 'views/listfilms.html'
  })
    .when('/search', {
      controller: 'SearchController',
      templateUrl: 'views/searchlistfilms.html'
  })
    .when('/favourites', {
      controller: 'FavouritesController',
      templateUrl: 'views/favouriteListFilms.html'
  })
    .when('/film/:id', {
      controller: 'FilmController',
      templateUrl: 'views/film.html'
  })
  .when('/filmFavourite/:id', {
      controller: 'FilmFavouriteController',
      templateUrl: 'views/filmFavourite.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});