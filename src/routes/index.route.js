const express = require('express');
const users = require('./users.route');
const swagger = require('./swagger.route');

const router = express.Router();

router.use('/users', users);
router.use('/', swagger);

router.get('/', (req, res) => res.redirect('/api-docs-ui'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;