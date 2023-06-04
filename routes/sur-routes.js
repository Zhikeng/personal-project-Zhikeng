const express = require('express')
const resController = require('../controllers/res-controller')
const router = express.Router()

router.route('/')
    .get(resController.display)

module.exports = router;