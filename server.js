var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//var fs = require('fs')
mongoose.connect('mongodb://localhost:27017/Filmsfy');
var app = express();

var filmSchema = new mongoose.Schema({
	id: String,
	title: String,
	date: String,
	points: String,
	genres:[{id:String, name:String}],
	overview: String,
	poster: String,
	backdrop: String
});
var Film = mongoose.model('Film', filmSchema);

var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname+ '/'));

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
	console.log("Express escuchando en el puerto " + app.get('port'));
});

app.get('/favourites', function(req, res){
	console.log("Busqueda...");
	Film.find(function(err, films){
		if(err){
			res.send(err);
		}
		res.json(films);
	});
});

app.get('/film/:id_film', function(req, res){
	var id_film = req.params.id_film;
	Film.find({ 'id': id_film },function(err, films){
		if(err){
			res.send(err);
			console.log("error");
		}
		else
		{
			console.log("encontrado");
		}
		res.json(films);
	});
});

app.get('/filmFavourite/:id_film', function(req, res){
	var id_film = req.params.id_film;
	Film.find({ 'id': id_film },function(err, films){
		if(err){
			res.send(err);
			console.log("error");
		}
		else
		{
			console.log("encontrado");
		}
		res.json(films);
	});
});

app.post("/film", jsonParser,function(req, res){
	var id = req.body.id;
	var title = req.body.title;
	var points = req.body.points;
	var date = req.body.date;
	var genres = req.body.genres;
	var overview = req.body.overview;
	var poster = req.body.poster;
	var backdrop = req.body.backdrop;

	var new_favourite = {
		"id": id,
		"title" : title,
		"points" : points,
		"date" : date,
		"genres": genres,
		"overview" : overview,
		"poster" : poster,
		"backdrop" : backdrop
	};
	console.log("Received favourite " + title);

	Film.create(new_favourite, function(err, films){
		if(err) res.send(err);
	});
});

app.delete('/film/:id_film', function(req, res){
	var id_film = req.params.id_film;
	Film.findOneAndRemove({ 'id': id_film }, function(err, films){
		if(err){
			res.send(err);
			console.log("error");
		}
		else
		{
			Film.find(function(err,films){
			if(err) res.send(err);
			res.json(films);

			});
		}
	});
});

app.get('/', function(req, res){
	res.sendFile("./index.html");
});

app.get('*', function(req, res){
	res.sendFile('./index.html');
});