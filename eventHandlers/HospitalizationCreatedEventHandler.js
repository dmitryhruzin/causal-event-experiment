class HospitalizationCreatedEventHandler {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('HospitalizationCreatedEventHandler handle')
  }
}

module.exports = HospitalizationCreatedEventHandler
