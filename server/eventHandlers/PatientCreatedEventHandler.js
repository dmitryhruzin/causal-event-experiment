const BaseEventHandler = require('./BaseEventHandler')

class PatientCreatedEventHandler extends BaseEventHandler {
  constructor(repo) {
    const eventTypes = ['PatientCreated']
    super({ eventTypes })

    this.repo = repo
  }

  handle(groupEvents) {
    const events = this.unpackContainer(groupEvents)

    for (const event of events) {
      console.log('PatientCreatedEventHandler handle', events)
    }
  }
}

module.exports = PatientCreatedEventHandler
