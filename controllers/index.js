const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


// Connect api and front end routes
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);


// Send a 404 error if user goes to undefined route
router.use((req, res) => {
   res.status(404).end();
});

module.exports = router;