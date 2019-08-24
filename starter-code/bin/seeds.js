const mongoose = require('mongoose')
// const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})

// const celebrities = [
//   {
//     name : "Jennifer Lopez",
//     occupation: "Cantante",
//     catchPhrase  : "No sin mi voz"
//   },
//   {
//     name : "Malú Perez",
//     occupation: "Cantante",
//     catchPhrase  : "Yo soy mejor"
//   },
//   {
//     name : "La rosa",
//     occupation: "actriz",
//     catchPhrase  : "Soy la más guapa"
//   }

// ]

// Celebrity.create(celebrities)
// .then(celebs => {console.log(celebs.length + " celebrities created")
// mongoose.connection.close()}
// )
// .catch(err => console.log(err))

const movies = [
    {
      title : "Crawl",
      genre: "Drama",
      plot  : "Una mujer intenta salvar a su padre que queda atrapado en Florida durante un huracán de categoría 5. Durante su aventura, ambos se quedan atrapados en una casa que se inunda y que invaden una serie de salvajes depredadores."
    },
    {
      name : "El rey león",
      genre: "Drama",
      plot  : "Tras el asesinato de su padre, Simba, un joven león es apartado su reino y tendrá que descubrir con ayuda de amigos de la sabana africana el significado de la responsabilidad y la valentía. Más tarde volverá para recuperar el control de su reino."
    },
    {
      name : "Aladdin",
      genre: "Fantasía",
      plot  : "Aladdin es un ladronzuelo que se enamora de la hija del Sultán, la princesa Jasmine. Para poder conquistarla aceptará un desafío de Jafar. Aladdín tendrá que entrar en una cueva en mitad del desierto y conseguir una lámpara mágica que contiene al Genio que será el encargado de concederle todos sus deseos"
    }
  
  ]

  Movie.create(movies)
.then(movies => {console.log(movies.length + " movies created")
mongoose.connection.close()}
)
.catch(err => console.log(err))
