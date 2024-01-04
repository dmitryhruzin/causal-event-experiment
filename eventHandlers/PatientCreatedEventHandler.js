class PatientCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle() {
    console.log('PatientCreatedEventHandler handle')
  }
}

module.exports = PatientCreatedEventHandler
