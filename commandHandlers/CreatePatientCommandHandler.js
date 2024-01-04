const {HospitalizationCreated, PatientCreated} = require("../events");

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

    events.forEach((event) => {
      this.eventBus.dispatch(event)
    })

    return 'Acknowledgement OK'
  }
}

module.exports = CreatePatientCommandHandler
