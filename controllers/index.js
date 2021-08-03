const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api")

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);	router.use('/dashboard', dashboardRoutes);
