const express = require('express')
const adminController = require('../controllers/admin-controller')
const router = express.Router()

router.route('/admin-res')
.get(adminController.admin_res)

router.route('/create-res')
.get(adminController.create_res)

router.route('/update-res/:_id')
.get(adminController.update_res)

router.route('/admin-perso')
.get(adminController.admin_perso)

router.route('/create-perso')
.get(adminController.create_perso)

router.route('/update-perso/:_id')
.get(adminController.update_perso)

module.exports = router;