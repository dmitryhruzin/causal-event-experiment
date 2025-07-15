const {
  HospitalizationCreated,
  PatientCreated,
} = require("../events");

class CreatePatientCommandHandler {
  constructor(repo, eventBus) {
    this.repo = repo
    this.eventBus = eventBus
  }

  handle(patient) {
    // ToDo: ask repo for aggregate
    // ToDo: retrieve list of events

    const events = [
      new PatientCreated({ name: patient.name }),
      new HospitalizationCreated({ name: patient.hospitalization.name }),
    ]

    this.eventBus.dispatch({ title: 'CreatePatientGroupEvents', events })

    return 'Acknowledgement OK'
  }
}

module.exports = CreatePatientCommandHandler
