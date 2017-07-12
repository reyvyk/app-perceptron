const { Router } = require('express');
const autoload   = require('express-autoload-routes');

const router = Router();

const manualRoutes = {
  'index.js': {},
};

autoload(__dirname, manualRoutes)
  .then(route => router.use(route))
  .catch(err => debug(err));

module.exports = router;
