const express = require('express')
const siteController = require('../controllers/site-controller')
const router = express.Router()

router.route('/')
    .get(siteController.index)

router.route('/about')
    .get(siteController.about)

router.route('/login')
    .get(siteController.login_get)
    .post(siteController.login_post)

router.route('/register')
    .get(siteController.register_get)
    .post(siteController.register_post)

router.route('/auth/google')
    .get(siteController.google_get)

router.route('/auth/google/admin-console/create-perso')
    .get(siteController.google_redirect_get)

router.route('/logout')
    .get(siteController.logout)

module.exports = router;