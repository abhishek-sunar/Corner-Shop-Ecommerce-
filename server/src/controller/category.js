const Category = require("../models/category")
const createCategory = async(req, res) => {
    Product.create(req.body)
    res.send("Category created!!")
  }

const getAllCategory =  async (req, res) => {
    const data = await Product.find()
     res.send(data)
 }

 const findCategoryById = async (req, res) => {
    const data = await Product.findById(req.params.id)
    res.send(data)
  }

 const deleteCategoryById = async (req, res) => {
    const data = await Product.findByIdAndDelete(req.params.id)
    res.send({
      msg: `${req.params.id} Category deleted!`
    })
  }

 const updateCategoryById = async (req, res) => {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.send({
      msg: `${req.params.id} Category edited!`
    })
  }

  module.exports = {createCategory, getAllCategory, findCategoryById, deleteCategoryById, updateCategoryById}
