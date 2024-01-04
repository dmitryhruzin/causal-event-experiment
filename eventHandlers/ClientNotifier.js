class ClientNotifier {
  constructor(repo) {
    this.repo = repo
  }

  async handle(event) {
    await new Promise(r => setTimeout(r, Math.random() * 1000));
    console.log('ClientNotifier handle', event)
  }
}

module.exports = ClientNotifier
