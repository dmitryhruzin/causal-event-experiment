class DoctorProfileCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('DoctorProfileCreatedEventHandler handle', event)
  }
}

module.exports = DoctorProfileCreatedEventHandler
