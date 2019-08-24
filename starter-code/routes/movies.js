const express = require('express');
const routerMovies  = express.Router();
const Movie = require('../models/Movie')


routerMovies.get('/movies/new', (req,res,next)=>{
  res.render('movies/new')
})

routerMovies.get('/movies', (req, res, next) => {

  Movie.find()
  .then( movies => {
    res.render('movies/index', {movies} )}
  )
  .catch(err => next(err))

});

routerMovies.get('/movies/:id', (req, res, next) => {

  Movie.findById(req.params.id)
  .then( movie => {
    res.render('movies/show', {movie} )}
  )
  .catch(err => next(err))

});

routerMovies.get('/movies/:id/edit', (req, res, next) => {

  Movie.findById(req.params.id)
  .then( movie => {
    res.render('movies/edit', {movie} )}
  )
  .catch(err => next(err))

});


routerMovies.post('/movies', (req, res, next) => {

  const movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })

  movie.save()
  .then(done =>
    res.redirect('/movies')
  )
  .catch(err => 
    next(err), 
    res.redirect('/movies/new'))
});

routerMovies.post('/movies/:id', (req, res, next) => {
  
  const editMovie = {
    title: req.body.editTitle,
    genre: req.body.editGenre,
    plot: req.body.editPlot
  }

  Movie.findByIdAndUpdate(req.params.id, editMovie)
  .then(res.redirect('/movies'))
  .catch(err => next(err));
});


routerMovies.post('/movies/:id/delete', (req,res,next)=> {
  Movie.findByIdAndRemove(req.params.id)
  .then(res.redirect('/movies'))
  .catch(err => next(err));
})







module.exports = routerMovies;