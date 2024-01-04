class ClientNotifier {
  constructor(repo) {
    this.repo = repo
  }

  async handle(event) {
    console.log('ClientNotifier handle', event)
  }
}

module.exports = ClientNotifier
