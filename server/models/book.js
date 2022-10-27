//Student Name: Yin-Siang Moa
//Student ID: 301180968
//Date: Oct 26 2022


let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);