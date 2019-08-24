const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: String,
  genre: String,
  image: {type:String, default:"https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"},
  plot: String 
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
