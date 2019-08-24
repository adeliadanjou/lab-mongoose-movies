const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})

const celebrities = [
  {
    name : "Michael Jackson",
    occupation: "Cantante",
    image: "https://www.ecestaticos.com/image/clipping/939/d9f2b2d948fff8bdfff8edbc77f02bfc/michael-jackson.jpg",
    catchPhrase  : "Cuando estoy sobre el escenario me siento en casa."
  },
  {
    name : "Antonio Banderas",
    occupation: "Actor",
    image: "https://cdn.britannica.com/92/198892-004-EDB1DED3.jpg",
    catchPhrase  : "La profesión de actor es como una montaña rusa. Cuando te encuentras arriba, no hay que dejar de pensar que enseguida se vuelve a bajar y otra vez a subir."
  },
  {
    name : "George Lucas",
    occupation: "Cineasta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/George_Lucas_cropped_2009.jpg/250px-George_Lucas_cropped_2009.jpg",
    catchPhrase  : "El secreto de las películas es que son una ilusión."
  },
  {
    name: "John Travolta",
    occupation: "Actor",
    image: "https://i.pinimg.com/236x/9b/b3/b9/9bb3b984e0e16c6fa2fdfd26019f79f3--grease-film-grease-.jpg?b=t",
    catchPhrase: "La actuación es una mezcla de suerte y elección. Yo tuve suerte."
  },

]

Celebrity.create(celebrities)
.then(celebs => {console.log(celebs.length + " celebrities created")
mongoose.connection.close()}
)
.catch(err => console.log(err))

// A PARTIR DE AQUÍ SEEDS DE MOVIES: 

const movies = [
    {
      title : "Crawl",
      genre: "Drama",
      image: "https://amc-theatres-res.cloudinary.com/v1560887222/amc-cdn/production/2/movies/59400/59365/PosterDynamic/78382.jpg",
      plot  : "Una mujer intenta salvar a su padre que queda atrapado en Florida durante un huracán de categoría 5. Durante su aventura, ambos se quedan atrapados en una casa que se inunda y que invaden una serie de salvajes depredadores."
    },
    {
      title : "El rey león",
      genre: "Drama",
      image: "https://www.ecartelera.com/carteles/12800/12888/003_m.jpg",
      plot  : "Tras el asesinato de su padre, Simba, un joven león es apartado su reino y tendrá que descubrir con ayuda de amigos de la sabana africana el significado de la responsabilidad y la valentía. Más tarde volverá para recuperar el control de su reino."
    },
    {
      title : "Aladdin",
      genre: "Fantasía",
      image: "https://pics.filmaffinity.com/aladdin-443262605-large.jpg",
      plot  : "Aladdin es un ladronzuelo que se enamora de la hija del Sultán, la princesa Jasmine. Para poder conquistarla aceptará un desafío de Jafar. Aladdín tendrá que entrar en una cueva en mitad del desierto y conseguir una lámpara mágica que contiene al Genio que será el encargado de concederle todos sus deseos"
    },
    {
      title : "Coco",
      genre: "Comedia",
      image: "https://pics.filmaffinity.com/Coco-155051069-large.jpg",
      plot  : "Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó, y quieren obligar a Miguel a ser zapatero, como todos los miembros de la familia. Por accidente, Miguel entra en la Tierra de los Muertos, de donde sólo podrá salir si un familiar difunto le concede su bendición, pero su tatarabuela se niega a dejarlo volver con los vivos si no promete que no será músico. Debido a eso, Miguel escapa de ella y empieza a buscar a su tatarabuelo."
    }
  
  ]

  Movie.create(movies)
.then(movies => {console.log(movies.length + " movies created")
mongoose.connection.close()}
)
.catch(err => console.log(err))
