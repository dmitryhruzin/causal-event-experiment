const BaseEventHandler = require('./BaseEventHandler')

class DoctorCreatedEventHandler extends BaseEventHandler {
  constructor(repo) {
    const eventTypes = ['DoctorCreated']
    super({ eventTypes })

    this.repo = repo
  }

  handle(groupEvents) {
    const events = this.unpackContainer(groupEvents)

    for (const event of events) {
      console.log('DoctorCreatedEventHandler handle', events)
    }
  }
}

module.exports = DoctorCreatedEventHandler
