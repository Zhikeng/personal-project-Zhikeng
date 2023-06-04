const express = require('express')
const persoController = require('../controllers/perso-controller')
const router = express.Router()

router.route('/')
  .post(persoController.create)

router.route('/:_id')
  .get(persoController.detail)
  .put(persoController.update)
  .delete(persoController.delete)


module.exports = router;