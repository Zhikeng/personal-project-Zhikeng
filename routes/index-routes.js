const express = require('express');
const siteRouter = require('./site-routes')
const resRouter = require('./res-routes');
const adminRouter = require('./admin-routes');
const surRouter = require('./sur-routes');
const persoRouter = require('./perso-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/res', resRouter);
router.use('/perso',persoRouter);
router.use('/admin-console', adminRouter);
router.use('/housing-survey',surRouter);

module.exports = router;