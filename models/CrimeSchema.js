const mongoose=require('mongoose')
const {Schema}= mongoose;


const crimeSceneSchema = new Schema({
    location: {
      type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: String,
  })
  
  
const Crime = mongoose.model('crimescene',crimeSceneSchema);
Crime.createIndexes();


module.exports= Crime;