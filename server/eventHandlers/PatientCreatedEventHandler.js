class PatientCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('PatientCreatedEventHandler handle', event)
  }
}

module.exports = PatientCreatedEventHandler
