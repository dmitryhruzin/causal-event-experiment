const BaseEventHandler = require('./BaseEventHandler')
const { socket } = require('../socket')

class ClientNotifier extends BaseEventHandler {
  constructor(repo) {
    const eventTypes = ['PatientCreated', 'HospitalizationCreated']
    super({ eventTypes })

    this.repo = repo
  }

  async handle(groupEvents) {
    const events = this.unpackContainer(groupEvents)
    
    console.log('ClientNotifier handle', events)
    
    for (const event of events) {
      socket.io.emit(event.constructor.name, event);
    }
  }
}

module.exports = ClientNotifier
