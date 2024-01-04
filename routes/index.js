const express = require('express');
const patients = require('./patients')

const router = express.Router();

router.get('/healthcheck', function(req, res, next) {
  res.status(200).send('OK');
});
router.use('/patients', patients)

module.exports = router;
