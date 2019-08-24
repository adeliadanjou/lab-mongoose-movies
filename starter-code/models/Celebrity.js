const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CelebSchema = new Schema ({
  name : {type:String, unique: true},
  occupation: String,
  image: String,
  catchPhrase  : String
})

const Celebrity = mongoose.model('Celebrity', CelebSchema)

module.exports = Celebrity