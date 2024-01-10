const express = require('express');
const patients = require('./patients')
const doctors = require('./doctors')

const router = express.Router();

router.get('/healthcheck', function(req, res, next) {
  res.status(200).send('OK');
});
router.use('/patients', patients)
router.use('/doctors', doctors)

module.exports = router;
