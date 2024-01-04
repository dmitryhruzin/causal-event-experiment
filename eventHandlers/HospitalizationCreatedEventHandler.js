class HospitalizationCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle() {
    console.log('HospitalizationCreatedEventHandler handle')
  }
}

module.exports = HospitalizationCreatedEventHandler
