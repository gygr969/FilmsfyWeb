app.controller('MainController', ['$scope', 'getFilms', function($scope, getFilms) {
  $scope.films = [];
  $('#now').addClass("active");
  $('#comming').removeClass("active");
  $('#search').removeClass("active");
  $('#favourites').removeClass("active");

  getFilms.nowPlaying().success(function(data) {
    $scope.films = data.results;
  });

}]);

app.controller('CarouselController', ['$scope', 'getFilms',function($scope, getFilms) {
  $scope.films = [];
  $scope.myInterval = 3000;

  $('#now').removeClass("active");
  $('#comming').removeClass("active");
  $('#search').removeClass("active");
  $('#favourites').removeClass("active");

  getFilms.nowPlaying().success(function(data) {
    var filmsCarrousel = [];
    for(var i=0;i<=3;i++) 
    {
      var film = data.results[i];
      filmsCarrousel.push(film);
    }
    $scope.films = filmsCarrousel;
  });

}]);

app.controller('CommingController', ['$scope', 'getFilms', function($scope, getFilms) {
  $scope.films = [];
  $('#now').removeClass("active");
  $('#comming').addClass("active");
  $('#search').removeClass("active");
  $('#favourites').removeClass("active");

  getFilms.onComming().success(function(data) {
    $scope.films = data.results;
  });
}]);

app.controller('SearchController', ['$scope', 'getFilms', function($scope, getFilms) {

	$scope.films = null;
  $('#now').removeClass("active");
  $('#comming').removeClass("active");
  $('#search').addClass("active");
  $('#favourites').removeClass("active");

  $scope.search= function() {
    $scope.films = [];

    getFilms.search($scope.searchString).success(function(data) {
      $scope.films = data.results;
    });
  };

}]);

app.controller('FavouritesController', ['$scope', 'getFilms', function($scope, getFilms) {

  $scope.films = {};
  $('#now').removeClass("active");
  $('#comming').removeClass("active");
  $('#search').removeClass("active");
  $('#favourites').addClass("active");

  $scope.removeFavouriteFromList = function(id)
  {
    console.log("called");
    getFilms.removeFavourite(id).success(function(data) {
      $scope.films = data;
    });
  };

  getFilms.filmsFavourites().success(function(data) {
    $scope.films = data;
  });

}]);

app.controller('FilmController', ['$scope', 'getFilms', '$routeParams', function($scope, getFilms, $routeParams) {

	$scope.id = $routeParams.id;
  $scope.isFavouriteFilm = false;
  $scope.formData = {};
  $('#remove').hide();

  getFilms.film($scope.id).success(function(data){
    $scope.film = data;
    $scope.backdrop = "http://image.tmdb.org/t/p/w1280" + $scope.film.backdrop_path;
  });

  $scope.goBack = function() 
  {
    window.history.back();
  };

  $scope.addFavourite = function(formData){

    $scope.filmInfo = 
    {
      "id":formData.id,
      "title":formData.title,
      "points":formData.vote_average,
      "date":formData.release_date,
      "genres":formData.genres,
      "overview":formData.overview,
      "poster":formData.poster_path,
      "backdrop":formData.backdrop_path
    }

    getFilms.addFavourite($scope.filmInfo);
    $('.remove').show();
    $('.add').hide();
        
  };

  $scope.removeFavourite = function(){

    getFilms.removeFavourite($scope.id);
    $('.remove').hide();
    $('.add').show();
  };

  getFilms.isFavourite($scope.id).success(function(data){

    if(data.length != 0)
    {
      $('.remove').show();
      $('.add').hide();
    }
    else
    {
      $('.remove').hide();
    }
  });

}]);
app.controller('FilmFavouriteController', ['$scope', 'getFilms', '$routeParams', function($scope, getFilms, $routeParams) {

  $scope.id = $routeParams.id;
  $scope.formData = {};
  $('#remove').hide();

  getFilms.filmFavourite($scope.id).success(function(data){
    $scope.film = data[0];
    $scope.backdrop = "http://image.tmdb.org/t/p/w1280" + $scope.film.backdrop;
    console.log(data);
  });

  $scope.goBack = function() 
  {
    window.history.back();
  };

  $scope.removeFavourite = function(){

    getFilms.removeFavourite($scope.id);
    $('.remove').hide();
    $('.add').show();

    window.location.href = "#/favourites";
  };

}]);