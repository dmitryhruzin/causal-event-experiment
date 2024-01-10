class DoctorAndDoctorProfileCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('DoctorAndDoctorProfileCreatedEventHandler handle', event)
  }
}

module.exports = DoctorAndDoctorProfileCreatedEventHandler
