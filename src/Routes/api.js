const express = require('express')
const router = express.Router()

//blogController
const blogController = require('../Controllers/blogController')
router.get('/blog/create', blogController.create)
router.get('/blog/read', blogController.read)
router.get('/blog/update', blogController.update)
router.get('/blog/delete', blogController.delete)

//commentController
const commentController = require('../Controllers/commentController')
router.get('/comment/create', commentController.create)
router.get('/comment/read', commentController.read)
router.get('/comment/update', commentController.update)
router.get('/comment/delete', commentController.delete)

//messageController
const messageController = require('../Controllers/messageController')
router.get('/comment/create', messageController.create)
router.get('/comment/read', messageController.read)
router.get('/comment/update', messageController.update)
router.get('/comment/delete', messageController.delete)

//portfolioController
const portfolioController = require('../Controllers/portfolioController')
router.get('/portfolio/create', portfolioController.create)
router.get('/portfolio/read', portfolioController.read)
router.get('/portfolio/update', portfolioController.update)
router.get('/portfolio/delete', portfolioController.delete)

//productController
const productController = require('../Controllers/productController')
router.get('/product/create', productController.create)
router.get('/product/read', productController.read)
router.get('/product/update', productController.update)
router.get('/product/delete', productController.delete)


module.exports = router