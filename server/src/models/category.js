const mongoose = require("mongoose");

const Category = mongoose.model('Category', {
    categoryName: String,
    description: String,
    categoryImage: String,    
    isFeatured: Boolean,
 });

 module.exports = Category

