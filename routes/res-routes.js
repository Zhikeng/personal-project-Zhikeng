const express = require('express')
const resController = require('../controllers/res-controller')
const router = express.Router()

router.route('/')
  .post(resController.create)

router.route('/:_id')
  .get(resController.detail)
  .put(resController.update)
  .delete(resController.delete)


module.exports = router;