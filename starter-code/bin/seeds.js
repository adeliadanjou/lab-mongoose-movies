const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

mongoose.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})

const celebrities = [
  {
    name : "Jennifer Lopez",
    occupation: "Cantante",
    catchPhrase  : "No sin mi voz"
  },
  {
    name : "Malú Perez",
    occupation: "Cantante",
    catchPhrase  : "Yo soy mejor"
  },
  {
    name : "La rosa",
    occupation: "actriz",
    catchPhrase  : "Soy la más guapa"
  }

]

Celebrity.create(celebrities)
.then(celebs => {console.log(celebs.length + " celebrities created")
mongoose.connection.close()}
)
.catch(err => console.log(err))