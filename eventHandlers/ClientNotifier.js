const BaseEventHandler = require('./BaseEventHandler')

class ClientNotifier extends BaseEventHandler {
  constructor(repo) {
    const eventTypes = ['PatientCreated', 'HospitalizationCreated']
    super({ eventTypes })

    this.repo = repo
  }

  async handle(groupEvents) {
    const events = this.unpackContainer(groupEvents)

    for (const event of events) {
      console.log('ClientNotifier handle', event)
    }
  }
}

module.exports = ClientNotifier
