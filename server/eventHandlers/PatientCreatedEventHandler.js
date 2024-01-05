class PatientCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('PatientCreatedEventHandler handle')
  }
}

module.exports = PatientCreatedEventHandler
