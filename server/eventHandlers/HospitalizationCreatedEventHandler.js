class HospitalizationCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('HospitalizationCreatedEventHandler handle', event)
  }
}

module.exports = HospitalizationCreatedEventHandler
