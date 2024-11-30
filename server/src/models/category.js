const mongoose = require("mongoose");

const Category = mongoose.model('Category', {
    categoryName: String,
    categoryprice: Number,
    description: String,
 });

 module.exports = Category