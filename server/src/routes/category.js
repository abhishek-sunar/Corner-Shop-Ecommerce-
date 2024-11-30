
const {Router} = require('express')
const { createCategory, getAllCategory, findCategoryById, deleteCategoryById, updateCategoryById } = require('../controller/category')



const CategoryRoute = Router()

CategoryRoute.post('/category', createCategory)
CategoryRoute.get('/category', getAllCategory)
CategoryRoute.get('/category/:id', findCategoryById)
CategoryRoute.delete('/category/:id', deleteCategoryById)
CategoryRoute.put('/category/:id', updateCategoryById)






module.exports = CategoryRoute;