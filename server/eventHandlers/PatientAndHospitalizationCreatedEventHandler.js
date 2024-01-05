class PatientAndHospitalizationCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('PatientAndHospitalizationCreatedEventHandler handle', event)
  }
}

module.exports = PatientAndHospitalizationCreatedEventHandler
