const express = require('express');
const { CreateDoctorCommand } = require("../commands");
const router = express.Router();

router.post('/', async function(req, res, next) {
  // ToDo: add payload validation
  const command = new CreateDoctorCommand(req.body);
  const result = await req.commanBus.run(command)

  // ToDo: handle errors
  res.status(200).send(result)
});

module.exports = router;
