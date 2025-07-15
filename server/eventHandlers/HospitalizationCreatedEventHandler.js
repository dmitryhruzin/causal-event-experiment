const BaseEventHandler = require('./BaseEventHandler')

class HospitalizationCreatedEventHandler extends BaseEventHandler {
  constructor(repo) {
    const eventTypes = ['HospitalizationCreated']
    super({ eventTypes })

    this.repo = repo
  }

  handle(groupEvents) {
    const events = this.unpackContainer(groupEvents)

    for (const event of events) {
      console.log('HospitalizationCreatedEventHandler handle', events)
    }
  }
}

module.exports = HospitalizationCreatedEventHandler
