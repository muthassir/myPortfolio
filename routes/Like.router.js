const express = require('express')
const likecontroller = require('../controllers/like.controller.js')

const router = express.Router()

router.put('/like',likecontroller.likeUpdate)
router.get('/like', likecontroller.likeGet)

module.exports = router;