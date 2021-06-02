const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const movieSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    rentPrice:{
        type: Number,
        required: true
    },
    buyPrice:{
        type: Number,
        required: true
    },
    tv:{
        type: Boolean,
        required: true
    },
    onHomePage:{
        type: Boolean,
        required: true
        //default: aaa : for default value
    },
    rating:{
        type: String,
        require: true
    },
    star:{
        type: Number,
        require: true
    },
    smallImg:{
        type: String
        
    },
    largeImg: {
        type: String
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    status:{
        type: String,
        default: "Open"
    }
    
    
});

  
// for every Schema (1 schema per collection), must create a model object => allow to do CRUD

const movieModel = mongoose.model('Movie', movieSchema);  // Movie is the name of the collection, movieSchema is the name of the schema in this file
// movieModel is the object to use to connect to other files

module.exports = movieModel;


