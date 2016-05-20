app.factory("getFilms", ['$http', function($http){

	var getFilms = {};

	getFilms.nowPlaying = function() 
	{
		return $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY")
			.success(function(data) {
	              return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	};
	getFilms.onComming = function()
	{
		return $http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY")
			.success(function(data) { 
	              return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}
	getFilms.filmsFavourites = function()
	{
		return $http.get("/favourites")
			.success(function(data) { 
	              return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}
	getFilms.isFavourite = function(id)
	{
		return $http.get("/film/"+id)
			.success(function(data) { 
	              return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}
	getFilms.search = function(searchString)
	{
		return $http.get("http://api.themoviedb.org/3/search/movie?query="+searchString+"&api_key=YOUR_API_KEY")
			.success(function(data) { 
	              return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}

	getFilms.film = function(filmId)
	{
		return $http.get("http://api.themoviedb.org/3/movie/"+ filmId +"?api_key=YOUR_API_KEY")
			.success(function(data) {
	            return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}

	getFilms.filmFavourite = function(filmId)
	{
		return $http.get("/filmFavourite/"+ filmId)
			.success(function(data) {
	            return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}

	getFilms.addFavourite = function(formData)
	{
		$http.post('/film', formData);
	}

	getFilms.removeFavourite = function(id)
	{
		return $http.delete('/film/' + id)
			.success(function(data) {
	            return data; 
	            }) 
            .error(function(err) { 
              return err; 
            }); 
	}

	return getFilms;

}]);
