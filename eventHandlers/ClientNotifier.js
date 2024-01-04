class ClientNotifier {
  constructor(repo) {
    this.repo = repo
  }

  handle(event) {
    console.log('ClientNotifier handle', event)
  }
}

module.exports = ClientNotifier
