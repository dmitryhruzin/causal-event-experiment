class ClientNotifier {
  constructor(repo) {
    this.repo = repo
  }

  async handle(event) {
    console.log('ClientNotifier handle', event.patient)
    console.log('ClientNotifier handle', event.hospitalization)
  }
}

module.exports = ClientNotifier
