const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const adminModel = require("./model/Admin.js");

const app = express();
app.use(bodyParser.json());

// this for load variable info from key.env
require("dotenv").config({path:'./config/key.env'});

app.get("/allMovie", (req,res) =>{
    // res.json(allMovie);
    //adminModel.find({onHomePage: true, tv: false} )
    adminModel.find({})
    .then((movies) => {
        allMovie = movies.map(movie =>{
            return {
                id: movie.id,
                title: movie.title,
                synopsis: movie.synopsis,
                rentPrice: movie.rentPrice,
                buyPrice: movie.buyPrice,
                tv: movie.tv,
                onHomePage: movie.onHomePage,
                rating: movie.rating,
                star: movie.star,
                status: movie.status,    
                smallImg: movie.smallImg,
                largeImg: movie.largeImg
            }
        })
        res.json(allMovie)
    })
    
    .catch(err => console.log(`Error while pulling data`))
    
})

// app.get("/allTV", (req,res) =>{
//     // res.json(allMovie);
//     adminModel.find({ tv: true} )
//     .then((movies) => {
//         allTVs = movies.map(movie =>{
//             return {
//                 id: movie.id,
//                 title: movie.title,
//                 synopsis: movie.synopsis,
//                 rentPrice: movie.rentPrice,
//                 buyPrice: movie.buyPrice,
//                 tv: movie.tv,
//                 onHomePage: movie.onHomePage,
//                 rating: movie.rating,
//                 star: movie.star,
//                 status: movie.status,    
//                 smallImg: movie.smallImg,
//                 largeImg: movie.largeImg
//             }
//         })
//         res.json(allTVs)
//     })
    
//     .catch(err => console.log(`Error while pulling data`))
    
// })

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>console.log(`Error :${err}`));




const PORT_NO = process.env.PORT || 5000;
app.listen(PORT_NO, ()=>{

    console.log(`Web Server is up running ${PORT_NO}`)
})