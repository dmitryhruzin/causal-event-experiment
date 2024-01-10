class DoctorCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('DoctorCreatedEventHandler handle', event)
  }
}

module.exports = DoctorCreatedEventHandler
