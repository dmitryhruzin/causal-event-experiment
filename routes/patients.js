const express = require('express');
const { CreatePatientCommand} = require("../commands");
const router = express.Router();

router.post('/', async function(req, res, next) {
  // ToDo: add payload validation
  const command = new CreatePatientCommand(req.body);
  const result = await req.commanBus.run(command)

  // ToDo: handle errors
  res.status(200).send(result)
});

module.exports = router;
